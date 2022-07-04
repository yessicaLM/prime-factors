export const primeFactorsCalculator = (number: number): number[] => {
  const MINIMUM_NUMBER = 2;
  let minimumDivisor = 2;
  const listOfFactors = [];

  while (number >= MINIMUM_NUMBER) {
    if(number % minimumDivisor === 0) {
      number = number / minimumDivisor;
      listOfFactors.push(minimumDivisor);
    } else {
      minimumDivisor ++;
    }
  }
  return listOfFactors;
}