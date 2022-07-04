export const primeFactorsCalculator = (number: number): number[] => {
  const listOfFactors = []
  while (number >= 2) {
    if(number % 2 === 0) {
      number = number / 2;
      listOfFactors.push(2);
    }
  }
  return listOfFactors;
}