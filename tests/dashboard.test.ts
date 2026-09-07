import { describe, it, expect } from 'vitest';
import { trendSpark } from '../src/dashboard.js';

describe('trendSpark', () => {
  it('needs at least two points to draw anything', () => {
    expect(trendSpark([])).toBe('');
    expect(trendSpark([29])).toBe('');
  });

  it('draws one character per run', () => {
    expect(trendSpark([1, 2, 3, 4])).toHaveLength(4);
  });

  it('pins the low to the floor and the high to the ceiling', () => {
    const spark = trendSpark([29, 34, 40]);
    expect(spark.at(0)).toBe('▁');
    expect(spark.at(-1)).toBe('█');
  });

  it('draws a flat history mid-height, not on the floor', () => {
    expect(trendSpark([33, 33, 33])).toBe('▄▄▄');
  });
});
