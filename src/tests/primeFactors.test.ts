import { primeFactorsCalculator } from '../core/primeFactors';

// 2 -> [2]
// 2 * 2 -> [2,2]
// 2 * 2 * 2 -> [2,2,2]
// 3 -> [3]
// 3 * 3 -> [3,3]
// 3 * 2 -> [2,3]
// 5 * 5 -> [5,5]
// 5 * 7 * 11 * 3 -> [3,5,7,11]


describe('Prime factors', () => {
  it('given 2 returns [2]', () => {
    expect(primeFactorsCalculator(2)).toEqual([2]);
  });
});