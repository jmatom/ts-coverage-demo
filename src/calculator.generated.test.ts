import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    it('returns sum of two numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('returns difference of two numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });
  });

  describe('multiply', () => {
    it('returns product of two numbers', () => {
      expect(calc.multiply(3, 7)).toBe(21);
    });
  });

  describe('divide', () => {
    it('returns quotient of two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it('throws on division by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    it('returns base raised to a positive exponent', () => {
      expect(calc.power(2, 3)).toBe(8);
    });

    it('returns 1 for exponent of zero', () => {
      expect(calc.power(5, 0)).toBe(1);
    });

    it('returns reciprocal power for negative exponent', () => {
      expect(calc.power(2, -2)).toBe(0.25);
    });
  });
});
