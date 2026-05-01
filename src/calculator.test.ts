import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
      expect(calc.add(-1, -2)).toBe(-3);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(calc.subtract(10, 4)).toBe(6);
    });

    it('subtracts to a negative result', () => {
      expect(calc.subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(calc.multiply(3, 4)).toBe(12);
    });

    it('multiplies by zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    it('throws on division by zero', () => {
      expect(() => calc.divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    it('raises base to a positive exponent', () => {
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
