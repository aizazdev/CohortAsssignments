/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }

  if(str1.split('').sort() === str1.split('').sort()) {
    console.log(`${str1} and ${str2} are Anagrams`);
  } else {
    console.log(`${str1} and ${str2} are not Anagrams`);
  }
}

isAnagram('listen', 'silent');

module.exports = isAnagram;
