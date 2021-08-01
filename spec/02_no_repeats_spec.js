var noRepeats = require ('../coding_challenges/problems/02_no_repeats');

// Write a function, `noRepeats(yearStart, yearEnd)`, which takes a
// range of years and outputs those years which do not have any
// repeated digits.
//
// Hint: It may be helpful to write a helper function `noRepeat(year)`
// which returns true/false if a single year doesn't have a repeat.

describe("noRepeats", function() {
  it("should return a no repeat year", function() {
    expect(noRepeats(1234, 1234)).toEqual([1234]);
  });

  it("should not return a repeat year", function() {
    expect(noRepeats(1123, 1123)).toEqual([]);
  });

  it("should return only those years that have no repeated digits", function() {
    expect(noRepeats(1980, 1987)).toEqual([
      1980,
      1982,
      1983,
      1984,
      1985,
      1986,
      1987
    ]);
  });
});
