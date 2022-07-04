import { primeFactorsCalculator } from '../core/primeFactors';

// 2 -> [2] --> DONE
// 2 * 2 -> [2,2] --> DONE
// 2 * 2 * 2 -> [2,2,2] --> DONE
// 3 -> [3] --> DONE
// 3 * 3 -> [3,3] --> DONE
// 3 * 2 -> [2,3] --> DONE
// 5 * 5 -> [5,5] --> DONE
// 5 * 7 * 11 * 3 -> [3,5,7,11]


describe('Prime factors', () => {
  it('given 2 returns [2]', () => {
    expect(primeFactorsCalculator(2)).toEqual([2]);
  });

  it('given 2 * 2 returns [2, 2]', () => {
    expect(primeFactorsCalculator(2 * 2)).toEqual([2, 2]);
  });

  it('given 2 * 2 * 2 returns [2, 2, 2]', () => {
    expect(primeFactorsCalculator(2 * 2 * 2)).toEqual([2, 2, 2]);
  });

  it('given 3 returns [3]', () => {
    expect(primeFactorsCalculator(3)).toEqual([3]);
  });

  it('given 3 * 3 returns [3, 3]', () => {
    expect(primeFactorsCalculator(3 * 3)).toEqual([3, 3]);
  });

  it('given 3 * 2 returns [2, 3]', () => {
    expect(primeFactorsCalculator(3 * 2)).toEqual([2, 3]);
  });

  it('given 5 * 5 returns [5, 5]', () => {
    expect(primeFactorsCalculator(5 * 5)).toEqual([5, 5]);
  });

  it('given 5 * 7 * 11 * 3 returns [3,5,7,11]', () => {
    expect(primeFactorsCalculator(5 * 7 * 11 * 3)).toEqual([3, 5, 7, 11]);
  });
});