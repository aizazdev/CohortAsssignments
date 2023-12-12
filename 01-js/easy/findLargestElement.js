/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let arr = numbers;
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  console.log(`Largest Number in Array ${arr} is ${largestNumber}`);
}

findLargestElement([23, 43, 54, 65, 76, 7, 8]);
module.exports = findLargestElement;
