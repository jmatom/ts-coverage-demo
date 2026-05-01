/**
 * Demo target: a small calculator with several branches and zero tests.
 * The Kraken Coverage Improver should generate a sibling test file
 * `calculator.generated.test.ts` that exercises the uncovered branches
 * and pushes the file's coverage from 0% → ~100%.
 */
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  power(base: number, exponent: number): number {
    if (exponent < 0) {
      return 1 / this.power(base, -exponent);
    }
    if (exponent === 0) {
      return 1;
    }
    return base * this.power(base, exponent - 1);
  }
}
