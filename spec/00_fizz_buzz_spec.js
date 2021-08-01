var fizzBuzz = require ('../coding_challenges/problems/00_fizz_buzz');

// Write a function `fizzBuzz` that takes two numbers and outputs an array
// of strings of the values, Fizz, Buzz, and FizzBuzz.

// The function should use the two numbers as a range and for any number,
// included in that range, that is divisible by 3 the string Fizz should be
// added to the array, Buzz for numbers divisible by 5 and
// FizzBuzz for numbers divisible by 3 and 5.

// Any number that is not divisible by 3 or 5 should not add to the array

describe("Fizz Buzz", function() {
  it("outputs Fizz for numbers divisible by 3", function() {
    var result = fizzBuzz(3, 3);
    expect(result).toEqual(['Fizz']);
  });

  it("outputs Fizz for numbers divisible by 3", function() {
    var result = fizzBuzz(5, 5);
    expect(result).toEqual(['Buzz']);
  });

  it("outputs FizzBuzz for numbers divisible by 3 and 5", function() {
    var result = fizzBuzz(15, 15);
    expect(result).toEqual(['FizzBuzz']);
  });

  it("outputs an array of responses for a range of numbers", function() {
    var result = fizzBuzz(1, 100);
    expect(result.length).toEqual(47);
    expect(wordCount('FizzBuzz', result)).toEqual(6);
  });

});


// Test helper to count number of occurances of a word in an array
function wordCount(word, arr) {
  return arr.filter(function(item) {
    return item === word;
  }).length;
}
