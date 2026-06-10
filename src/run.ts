import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { BOARDS } from './sources/seeds.js';
import { fetchBoard } from './sources/boards.js';
import { categorise, isRelevant, isAdelaide, isRemote } from './categorise.js';
import {
  summarise,
  diffRoles,
  snapshotToCsvRow,
  CSV_HEADER,
} from './aggregate.js';
import { renderReadme } from './dashboard.js';
import type { Role } from './types.js';

const ROOT = process.cwd();
const DATA = resolve(ROOT, 'data');
const TIMESERIES = resolve(DATA, 'timeseries.csv');
const LATEST = resolve(DATA, 'latest.json');
const CHANGES = resolve(DATA, 'changes.md');
const README = resolve(ROOT, 'README.md');

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function loadPrevious(): Promise<Role[]> {
  try {
    return JSON.parse(await readFile(LATEST, 'utf-8')) as Role[];
  } catch {
    return [];
  }
}

async function collect(now: string, previous: Role[]): Promise<Role[]> {
  const firstSeenOf = new Map(previous.map((r) => [r.id, r.firstSeen]));
  const roles: Role[] = [];
  const seen = new Set<string>();

  const results = await Promise.allSettled(BOARDS.map((b) => fetchBoard(b)));
  results.forEach((result, index) => {
    const board = BOARDS[index];
    if (!board) return;
    if (result.status === 'rejected') {
      console.warn(`[pulse] ${board.name} (${board.kind}:${board.token}) skipped: ${String(result.reason)}`);
      return;
    }
    for (const posting of result.value) {
      if (seen.has(posting.id)) continue;
      if (!isRelevant(posting, board)) continue;
      seen.add(posting.id);
      roles.push({
        id: posting.id,
        company: posting.company,
        title: posting.title.trim(),
        location: posting.location.trim(),
        url: posting.url,
        category: categorise(`${posting.title} ${posting.description.slice(0, 600)}`),
        adelaide: isAdelaide(posting, board),
        remote: isRemote(posting),
        firstSeen: firstSeenOf.get(posting.id) ?? now,
      });
    }
  });

  roles.sort((a, b) => a.company.localeCompare(b.company) || a.title.localeCompare(b.title));
  return roles;
}

async function appendTimeseries(row: string): Promise<void> {
  const header = (await exists(TIMESERIES)) ? '' : `${CSV_HEADER}\n`;
  const existing = header ? '' : await readFile(TIMESERIES, 'utf-8');
  await writeFile(TIMESERIES, `${existing}${header}${row}\n`, 'utf-8');
}

async function readHistory(): Promise<number[]> {
  try {
    const lines = (await readFile(TIMESERIES, 'utf-8')).trim().split('\n').slice(1);
    return lines
      .map((l) => Number(l.split(',')[1]))
      .filter((n) => Number.isFinite(n))
      .slice(-60);
  } catch {
    return [];
  }
}

async function prependChanges(now: string, added: Role[], removed: Role[]): Promise<void> {
  if (added.length === 0 && removed.length === 0) return;
  const lines = [`## ${now}`, ''];
  for (const r of added) lines.push(`- new: ${r.title} at ${r.company}${r.location ? ` (${r.location})` : ''}`);
  for (const r of removed) lines.push(`- closed: ${r.title} at ${r.company}`);
  lines.push('');
  const prior = (await exists(CHANGES)) ? await readFile(CHANGES, 'utf-8') : '# Change log\n\n';
  const head = prior.startsWith('# Change log') ? prior.slice(0, prior.indexOf('\n\n') + 2) : '# Change log\n\n';
  const body = prior.slice(head.length);
  // Keep the log bounded to the most recent entries.
  const trimmedBody = body.split('\n').slice(0, 1200).join('\n');
  await writeFile(CHANGES, `${head}${lines.join('\n')}\n${trimmedBody}`, 'utf-8');
}

async function main(): Promise<void> {
  const now = new Date().toISOString();
  await mkdir(DATA, { recursive: true });

  const previous = await loadPrevious();
  const roles = await collect(now, previous);

  if (roles.length === 0) {
    console.error('[pulse] no roles collected, leaving previous data untouched');
    process.exitCode = 1;
    return;
  }

  const snapshot = summarise(roles, now);
  const { added, removed } = diffRoles(previous, roles);

  await appendTimeseries(snapshotToCsvRow(snapshot));
  await writeFile(LATEST, JSON.stringify(roles, null, 2) + '\n', 'utf-8');
  await prependChanges(now, added, removed);

  const history = await readHistory();
  const runs = history.length;
  await writeFile(README, renderReadme({ snapshot, roles, history, runs }), 'utf-8');

  console.info(
    `[pulse] ${roles.length} roles, ${snapshot.companies} companies, +${added.length}/-${removed.length} since last run`,
  );
}

main().catch((err: unknown) => {
  console.error(`[pulse] failed: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
