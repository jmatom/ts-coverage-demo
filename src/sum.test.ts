import { sum } from './sum';

describe('sum', () => {
  it('returns the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('returns the sum of negative numbers', () => {
    expect(sum(-1, -4)).toBe(-5);
  });
});
