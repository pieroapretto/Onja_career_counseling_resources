var orderedVowelWords =  require('../coding_challenges/problems/04_ordered_vowels');

// Write a method, `orderedVowelWords(str)` that takes a string of
// lowercase words and returns a string with just the words containing
// all their vowels (excluding "y") in alphabetical order. Vowels may
// be repeated (`"afoot"` is an ordered vowel word).
//
// HINT: It may be helpful to create a helper method, `orderedVowelWord(word)`
// which returns true/false if a word's vowels are ordered.

describe("orderedVowelWords", function() {
  it("returns a word that is in order", function() {
    expect(orderedVowelWords("amends")).toEqual("amends");
  });

  it("does not return a word that is not in order", function() {
    expect(orderedVowelWords("complicated")).toEqual("");
  });

  it("handle double vowels", function() {
    expect(orderedVowelWords("afoot")).toEqual("afoot");
  });

  it("handles a word with a single vowel", function() {
    expect(orderedVowelWords("ham")).toEqual("ham");
  });

  it("handles a word with no vowel", function() {
    expect(orderedVowelWords("crypt")).toEqual("crypt");
  });

  it("handles a word with a single letter", function() {
    expect(orderedVowelWords("o")).toEqual("o");
  });

  it("ignores the letter y", function() {
    expect(orderedVowelWords("tamely")).toEqual("tamely");
  });

  it("processes a string with several words", function() {
    phrase = "this is a test of the vowel ordering system"
    result = "this is a test of the system"

    expect(orderedVowelWords(phrase)).toEqual(result);
  });
  it("processes a string with a few words", function() {
    phrase = "this is another test"
    result = "this is test"

    expect(orderedVowelWords(phrase)).toEqual(result);
  });

  it("processes a string with words with misordered vowels in several places", function() {
    phrase = "this is another test from Piero your favorite teacher in the universe"
    result = "this is test from your in the"

    expect(orderedVowelWords(phrase)).toEqual(result);
  });
})
