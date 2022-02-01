// Iterate over each individual word, and
// filter out words that do not have vowels in order.
//
// We can determine if a word has vowels in order by iterating over each letter
// in that word, if the letter is a vowel we can compare it to the last vowel
// we found. If the current letter is smaller, less than, the previousVowel we
// found, we know that they are not in order, and can therefore, return false.
//
// We could preform all of this logic in a single function, but this code is
// much easier to reason about when broken down into smaller problems.

function orderedVowelWords(str) {
  // First split the string into an array of words.
  // Then filter out the words that do not have vowels in order.
  // Then join the words back into a new string, and return.
  return str.split(' ').filter(orderedVowels).join(' ');
}

function orderedVowels(str) {
  var previousVowelIndex;
  var letters = str.split('');

  // We are using a 'for' loop here so we can break the
  // moment we find a vowel out of 'order'
  for (var i = 0; i < letters.length; i++) {
    let vowelIndex = returnVowelIndex(letters[i]);
    if (vowelIndex > -1) {
      // If previousVowel, has been set, us it, but if
      // not, set it to the current letter
      previousVowelIndex = previousVowelIndex || vowelIndex;

      // If the previousVowel is greater than the current letter,
      // we know our vowels are out of 'order'
      if (previousVowelIndex > vowelIndex) {
        return false;
      }
    }
  }

  return true;
}

function returnVowelIndex(char) {
  // returns the index of a character from an array of alphabetically arranged vowels 
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char);
}