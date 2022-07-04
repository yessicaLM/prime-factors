import { primeFactorsCalculator } from '../core/primeFactors';

describe('Prime factors', () => {
  it('given 2 returns [2]', () => {
    const currentValue = 2;
    const expectedValue = 2;

    expect(primeFactorsCalculator(currentValue)).toEqual([expectedValue]);
  });

  it('given 2 * 2 returns [2, 2]', () => {
    const currentValue = 2 * 2;
    const expectedValue = [2, 2];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 2 * 2 * 2 returns [2, 2, 2]', () => {
    const currentValue = 2 * 2 * 2;
    const expectedValue = [2, 2, 2];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 3 returns [3]', () => {
    const currentValue = 3;
    const expectedValue = [3];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 3 * 3 returns [3, 3]', () => {
    const currentValue = 3 * 3;
    const expectedValue = [3, 3];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 3 * 2 returns [2, 3]', () => {
    const currentValue = 3 * 2;
    const expectedValue = [2, 3];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 5 * 5 returns [5, 5]', () => {
    const currentValue = 5 * 5;
    const expectedValue = [5, 5];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });

  it('given 5 * 7 * 11 * 3 returns [3,5,7,11]', () => {
    const currentValue = 5 * 7 * 11 * 3;
    const expectedValue = [3, 5, 7, 11];

    expect(primeFactorsCalculator(currentValue)).toEqual(expectedValue);
  });
});