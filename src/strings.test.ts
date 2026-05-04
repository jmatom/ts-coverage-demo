import { capitalize, isPalindrome, truncate } from './strings';

describe('capitalize', () => {
  it('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('lowercases trailing uppercase letters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });
});

describe('isPalindrome', () => {
  it('returns true for a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('returns true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('ignores case and non-alphanumeric characters', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });
});

describe('truncate', () => {
  it('throws when max is negative', () => {
    expect(() => truncate('hello', -1)).toThrow('max must be non-negative');
  });

  it('returns the original string when it fits within max', () => {
    expect(truncate('hi', 10)).toBe('hi');
  });

  it('returns the original string when length equals max', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('truncates and appends ellipsis when input exceeds max', () => {
    expect(truncate('hello world', 5)).toBe('hello…');
  });
});
