import { describe, it, expect } from 'vitest';
import { trendChart } from '../src/dashboard.js';

describe('trendChart', () => {
  it('needs at least two points to draw anything', () => {
    expect(trendChart([])).toBe('');
    expect(trendChart([29])).toBe('');
  });

  it('draws six rows of bars plus an axis', () => {
    expect(trendChart([1, 2, 3, 4]).split('\n')).toHaveLength(7);
  });

  it('draws one column per run', () => {
    const rows = trendChart([33, 37, 33, 37, 33]).split('\n');
    expect(rows[0]).toBe('37 │ █ █');
    expect(rows.at(-1)).toBe('   └─────');
  });

  it('labels the axis with the high and the low', () => {
    const rows = trendChart([33, 34, 37]).split('\n');
    expect(rows[0]?.startsWith('37 │')).toBe(true);
    expect(rows[5]?.startsWith('33 │')).toBe(true);
  });

  it('fills every column at the baseline and only the peak at the top', () => {
    const rows = trendChart([33, 34, 37]).split('\n');
    expect(rows[5]).toBe('33 │███');
    expect(rows[0]).toBe('37 │  █');
  });

  it('draws a flat history mid-height, not on the floor', () => {
    const rows = trendChart([33, 33, 33]).split('\n');
    expect(rows[0]).toBe('   │');
    expect(rows[3]).toBe('33 │███');
    expect(rows[5]).toBe('   │███');
  });
});
