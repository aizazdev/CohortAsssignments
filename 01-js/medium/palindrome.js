/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
//hello

function isPalindrome(str) {
  let reverseStr = str.split().reverse().join();
  console.log(reverseStr, str);
  return str === reverseStr;
}

let result = isPalindrome('nan');
console.log(result);
//str = 'aizaz'
module.exports = isPalindrome;
