/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let arr = str.split('');
  let vowals = ['a','e','i','o','u'];
  let counter = 0;
  //arr[0] = 12 greates

  for(let i=0; i<arr.length; i++) {  
    for(let j=0; j<vowals.length; j++) {
      if(arr[i] === vowals[j]) {
        counter++;
      }
    }
  }

  return counter;
}

let numOfVowals = countVowels('hello');
console.log(numOfVowals);

module.exports = countVowels;