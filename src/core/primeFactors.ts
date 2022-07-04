export const primeFactorsCalculator = (number: number): number[] => {
  let minimumDivisor = 2;
  const listOfFactors = []
  while (number >= 2) {
    if(number % minimumDivisor === 0) {
      number = number / minimumDivisor;
      listOfFactors.push(minimumDivisor);
    } else {
      minimumDivisor ++;
    }
  }
  return listOfFactors;
}