/**
 * Another demo target with no existing test file — exercises the
 * "sibling-mode" path of the orchestrator. A few branches per function
 * to make coverage interesting.
 */

export function capitalize(input: string): string {
  if (!input) return '';
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function isPalindrome(input: string): boolean {
  if (input.length <= 1) return true;
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalized === normalized.split('').reverse().join('');
}

export function truncate(input: string, max: number): string {
  if (max < 0) throw new Error('max must be non-negative');
  if (input.length <= max) return input;
  return input.slice(0, max) + '…';
}
