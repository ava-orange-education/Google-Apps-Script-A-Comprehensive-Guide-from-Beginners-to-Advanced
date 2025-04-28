// The classic version
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// A more concise version
function sumOfEvenNumbers2(numbers) {
  return numbers.reduce(
    (sum, number) => (number % 2 === 0 ? sum + number : sum),
    0
  );
}

// Example usage:
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumOfEvenNumbers(data);
const evenSum2 = sumOfEvenNumbers2(data);
console.log(`The sums of even numbers: ${evenSum} | ${evenSum2}`);
