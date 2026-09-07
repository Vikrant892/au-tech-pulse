import { CATEGORIES, type Category, type Role, type Snapshot } from './types.js';
import { topCompanies } from './aggregate.js';

// Plain-English Adelaide timestamp. No third-party date library.
function adelaideStamp(iso: string): string {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Adelaide',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso));
}

// Column chart of total open roles over the recorded history. Drawn with
// block characters in a fenced block rather than inline SVG: GitHub strips
// <svg> from rendered markdown, so a chart has to be text to survive on the
// repository page.
const CHART_ROWS = 6;

export function trendChart(history: number[]): string {
  if (history.length < 2) return '';
  const max = Math.max(...history);
  const min = Math.min(...history);
  const span = max - min;

  // A flat history has no shape to show, so sit it mid-height rather than on
  // the floor, where an unchanging market would read as no roles at all.
  const heights = history.map((v) =>
    span === 0 ? Math.ceil(CHART_ROWS / 2) : Math.round(((v - min) / span) * (CHART_ROWS - 1)) + 1,
  );

  const labels = new Map<number, string>();
  if (span === 0) labels.set(Math.ceil(CHART_ROWS / 2), String(max));
  else {
    labels.set(CHART_ROWS, String(max));
    labels.set(1, String(min));
  }

  const gutter = String(max).length;
  const rows: string[] = [];
  for (let row = CHART_ROWS; row >= 1; row--) {
    const bars = heights.map((h) => (h >= row ? '█' : ' ')).join('');
    rows.push(`${(labels.get(row) ?? '').padStart(gutter)} │${bars}`.trimEnd());
  }
  rows.push(`${' '.repeat(gutter)} └${'─'.repeat(history.length)}`);
  return rows.join('\n');
}

function bar(label: string, value: number, max: number): string {
  const width = max > 0 ? Math.round((value / max) * 28) : 0;
  const filled = '#'.repeat(width);
  const empty = '.'.repeat(28 - width);
  return `${label.padEnd(24)} ${String(value).padStart(4)}  ${filled}${empty}`;
}

export interface DashboardData {
  snapshot: Snapshot;
  roles: Role[];
  history: number[];
  runs: number;
}

export function renderReadme(d: DashboardData): string {
  const { snapshot: s, roles, history, runs } = d;
  const maxCat = Math.max(...CATEGORIES.map((c) => s.byCategory[c]), 1);
  const catBars = CATEGORIES.map((c) => bar(c, s.byCategory[c as Category], maxCat)).join('\n');

  const companies = topCompanies(roles, 10)
    .map((c, i) => `| ${i + 1} | ${c.company} | ${c.count} |`)
    .join('\n');

  const newest = [...roles]
    .sort((a, b) => b.firstSeen.localeCompare(a.firstSeen))
    .slice(0, 15)
    .map((r) => {
      const tags = [r.adelaide ? 'Adelaide' : '', r.remote ? 'Remote' : ''].filter(Boolean).join(', ');
      return `| [${escapePipe(r.title)}](${r.url}) | ${escapePipe(r.company)} | ${escapePipe(r.location) || tags || 'AU'} | ${r.category} |`;
    })
    .join('\n');

  const trend = trendChart(history);
  const now = history[history.length - 1] ?? 0;

  return `# Australia Tech Pulse

An open, auto-updating snapshot of the Australian technology job market, with a
focus on roles an Adelaide-based engineer can take: jobs located in Adelaide or
open to remote applicants across Australia. The data is collected automatically
from public company hiring feeds several times a day and committed straight back
to this repository, so the numbers below track the live market without anyone
touching a keyboard.

**Last updated:** ${adelaideStamp(s.timestamp)} (Adelaide time) · run #${runs}

## Right now

| Metric | Count |
| --- | --- |
| Open tech roles tracked | **${s.total}** |
| Located in Adelaide or South Australia | **${s.adelaide}** |
| Open to remote within Australia | **${s.remote}** |
| Companies hiring | **${s.companies}** |

## By field

\`\`\`
${catBars}
\`\`\`

${trend ? `## Trend\n\nOpen roles tracked across the last ${history.length} runs, oldest on the left. Now ${now}.\n\n\`\`\`\n${trend}\n\`\`\`\n` : ''}
## Companies hiring the most

| # | Company | Open tech roles |
| --- | --- | --- |
${companies}

## Newest roles

| Role | Company | Location | Field |
| --- | --- | --- | --- |
${newest}

## How it works

A scheduled GitHub Action pulls the public job feeds (Greenhouse, Lever, Ashby)
of a watchlist of Australian technology employers, keeps the roles located in
Australia or open to remote applicants, sorts them into fields, and writes three
data files:

- [\`data/timeseries.csv\`](data/timeseries.csv) one row per run, the headline counts over time
- [\`data/latest.json\`](data/latest.json) every open role in the current snapshot
- [\`data/changes.md\`](data/changes.md) a running log of roles that appeared or closed

No API keys, no scraping of private pages, no personal data. Everything is
sourced from feeds the companies publish for their own careers pages.

## Pipeline

\`\`\`mermaid
flowchart LR
    A[Cron: every 3 hours] --> B[Typecheck + tests]
    B -->|gate| C[Fetch job feeds]
    C --> C1[Greenhouse]
    C --> C2[Lever]
    C --> C3[Ashby]
    C1 --> D[Normalise to common schema]
    C2 --> D
    C3 --> D
    D --> E[Filter: Australia or remote-AU]
    E --> F[Categorise by field]
    F --> G[Diff against previous snapshot]
    G --> H[(timeseries.csv)]
    G --> I[(latest.json)]
    G --> J[(changes.md)]
    H --> K[Render README]
    I --> K
    K --> L[Commit back to repo]
\`\`\`

Design notes, for anyone reading this as an engineering sample:

- **Every run is gated by CI.** \`npm run typecheck\` and \`npm test\` both have to
  pass before any collection happens, so a broken parser can never write a bad
  measurement into the history.
- **Runs are serialised.** A concurrency group prevents two scheduled runs from
  overlapping and double-committing the same window.
- **The history is append-only.** Each run adds one row to the time series rather
  than rewriting it, so the trend line is a real record and not a recomputation.
- **The README is generated, not hand-edited.** This file is rendered from
  \`src/dashboard.ts\` on every run, which is why the numbers above are never stale.
- **Failure is visible.** A ten-minute timeout and a scoped write permission mean
  a hung or misbehaving run fails loudly instead of silently skipping.

Built with TypeScript on Node 20, no runtime dependencies beyond the standard
toolchain, and no database: the repository itself is the datastore.

## Run it yourself

\`\`\`bash
git clone https://github.com/Vikrant892/au-tech-pulse.git
cd au-tech-pulse
npm ci
npm run typecheck && npm test
npm run pulse          # writes data/ and regenerates this README
\`\`\`

## Why this exists

Job boards show you a slice of a single day. A time series shows you where the
market is moving: which fields are growing, which companies are scaling, and how
much of the work is open to remote applicants. South Australian employers mostly
hire through systems without public feeds, so the local-only count runs lean and
the real opportunity for an Adelaide engineer is the remote-Australia market.
This repository keeps that record in the open.

## Licence

MIT. The collected data is public information; the code is free to reuse.
`;
}

function escapePipe(text: string): string {
  return text.replace(/\|/g, '\\|').replace(/\n/g, ' ').trim();
}
