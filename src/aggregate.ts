import { CATEGORIES, type Category, type Role, type Snapshot } from './types.js';

export function summarise(roles: Role[], timestamp: string): Snapshot {
  const byCategory = Object.fromEntries(CATEGORIES.map((c) => [c, 0])) as Record<Category, number>;
  const companies = new Set<string>();
  let adelaide = 0;
  let remote = 0;
  for (const r of roles) {
    byCategory[r.category]++;
    companies.add(r.company);
    if (r.adelaide) adelaide++;
    if (r.remote) remote++;
  }
  return {
    timestamp,
    total: roles.length,
    byCategory,
    companies: companies.size,
    adelaide,
    remote,
  };
}

export interface Diff {
  added: Role[];
  removed: Role[];
}

export function diffRoles(previous: Role[], current: Role[]): Diff {
  const prevIds = new Set(previous.map((r) => r.id));
  const currIds = new Set(current.map((r) => r.id));
  return {
    added: current.filter((r) => !prevIds.has(r.id)),
    removed: previous.filter((r) => !currIds.has(r.id)),
  };
}

export function topCompanies(roles: Role[], n: number): { company: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const r of roles) counts.set(r.company, (counts.get(r.company) ?? 0) + 1);
  return [...counts.entries()]
    .map(([company, count]) => ({ company, count }))
    .sort((a, b) => b.count - a.count || a.company.localeCompare(b.company))
    .slice(0, n);
}

export function snapshotToCsvRow(s: Snapshot): string {
  return [
    s.timestamp,
    s.total,
    s.byCategory['Data Engineering'],
    s.byCategory['Machine Learning & AI'],
    s.byCategory['Cyber Security'],
    s.byCategory['Software Engineering'],
    s.byCategory['Cloud & DevOps'],
    s.byCategory['Other Tech'],
    s.companies,
    s.adelaide,
    s.remote,
  ].join(',');
}

export const CSV_HEADER =
  'timestamp,total,data_engineering,ml_ai,security,software,cloud_devops,other,companies,adelaide,remote';
