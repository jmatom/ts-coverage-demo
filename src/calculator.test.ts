import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    it('returns the sum of two numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });
    it('handles negative numbers', () => {
      expect(calc.add(-1, 1)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('returns the difference of two numbers', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });
    it('handles negative result', () => {
      expect(calc.subtract(2, 5)).toBe(-3);
    });
  });

  describe('multiply', () => {
    it('returns the product of two numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });
    it('handles zero', () => {
      expect(calc.multiply(0, 100)).toBe(0);
    });
  });

  describe('divide', () => {
    it('returns the quotient of two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });
    it('throws on division by zero', () => {
      expect(() => calc.divide(1, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    it('computes positive exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
    });
    it('returns 1 for exponent of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });
    it('handles negative exponent', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });
  });
});
