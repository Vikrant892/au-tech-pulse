import { describe, it, expect } from 'vitest';
import { summarise, diffRoles, topCompanies, snapshotToCsvRow, CSV_HEADER } from '../src/aggregate.js';
import type { Role } from '../src/types.js';

function role(over: Partial<Role>): Role {
  return {
    id: Math.random().toString(),
    company: 'Acme',
    title: 'Engineer',
    location: 'Adelaide',
    url: 'https://x',
    category: 'Software Engineering',
    adelaide: true,
    remote: false,
    firstSeen: '2026-06-10',
    ...over,
  };
}

describe('summarise', () => {
  it('counts totals, categories, companies and flags', () => {
    const roles = [
      role({ company: 'A', category: 'Data Engineering', adelaide: true, remote: false }),
      role({ company: 'A', category: 'Cyber Security', adelaide: false, remote: true }),
      role({ company: 'B', category: 'Data Engineering', adelaide: true, remote: true }),
    ];
    const s = summarise(roles, '2026-06-10T00:00:00Z');
    expect(s.total).toBe(3);
    expect(s.companies).toBe(2);
    expect(s.adelaide).toBe(2);
    expect(s.remote).toBe(2);
    expect(s.byCategory['Data Engineering']).toBe(2);
    expect(s.byCategory['Cyber Security']).toBe(1);
  });
});

describe('diffRoles', () => {
  it('detects added and removed roles by id', () => {
    const prev = [role({ id: 'a' }), role({ id: 'b' })];
    const curr = [role({ id: 'b' }), role({ id: 'c' })];
    const { added, removed } = diffRoles(prev, curr);
    expect(added.map((r) => r.id)).toEqual(['c']);
    expect(removed.map((r) => r.id)).toEqual(['a']);
  });
});

describe('topCompanies', () => {
  it('ranks by count then name', () => {
    const roles = [role({ company: 'A' }), role({ company: 'A' }), role({ company: 'B' })];
    expect(topCompanies(roles, 5)).toEqual([
      { company: 'A', count: 2 },
      { company: 'B', count: 1 },
    ]);
  });
});

describe('csv', () => {
  it('row has the same column count as the header', () => {
    const s = summarise([role({})], '2026-06-10T00:00:00Z');
    expect(snapshotToCsvRow(s).split(',').length).toBe(CSV_HEADER.split(',').length);
  });
});
