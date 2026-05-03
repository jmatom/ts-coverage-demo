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
  });

  describe('subtract', () => {
    it('returns the difference of two numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });
  });

  describe('multiply', () => {
    it('returns the product of two numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });
  });

  describe('divide', () => {
    it('returns the quotient of two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it('throws when dividing by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    it('returns base raised to a positive exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    it('returns 1 when exponent is zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    it('returns fractional result for negative exponent', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });
  });
});
