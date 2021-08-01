var letterCount = require('../coding_challenges/problems/03_letter_count');

// Write a function, `letter_count(str)` that takes a string and
// returns an object mapping each letter to its frequency. Do not include
// spaces.

describe("letterCount", function() {
  it("handles a simple case", function() {
    expect(letterCount("cat")).toEqual({
      c: 1,
      a: 1,
      t: 1
    });
  });

  it("handles multiples of the same letter", function() {
    expect(letterCount("moon")).toEqual({
      m: 1,
      o: 2,
      n: 1
    });
  });

  it("handles a multi-word case", function() {
    expect(letterCount("cats are fun")).toEqual({
      a: 2,
      c: 1,
      e: 1,
      f: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      u: 1
    });
  });
});
