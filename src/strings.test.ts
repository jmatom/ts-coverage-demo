import { capitalize, isPalindrome, truncate } from './strings';

describe('capitalize', () => {
  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });
  it('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  it('lowercases remaining characters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });
  it('handles single character', () => {
    expect(capitalize('a')).toBe('A');
  });
});

describe('isPalindrome', () => {
  it('returns true for single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });
  it('returns true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
  it('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
  it('is case-insensitive', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });
  it('ignores non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
});

describe('truncate', () => {
  it('throws when max is negative', () => {
    expect(() => truncate('hello', -1)).toThrow('max must be non-negative');
  });
  it('returns input unchanged when shorter than max', () => {
    expect(truncate('hi', 10)).toBe('hi');
  });
  it('returns input unchanged when equal to max', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });
  it('truncates and appends ellipsis when longer than max', () => {
    expect(truncate('hello world', 5)).toBe('hello…');
  });
});
