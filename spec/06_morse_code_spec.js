var morseEncode = require('../coding_challenges/problems/06_morse_code');

// Build a function, `morseEncode(str)` that takes in a string (no
// numbers or punctuation) and outputs the morse code for it. See
// http://en.wikipedia.org/wiki/Morse_code. Put two spaces between
// words and one space between letters.
//
// You'll have to type in morse code: I'd use an object to map letters to
// codes. Don't worry about numbers.
//
// I wrote a helper method `morseEncodeWord(word)` that handled a
// single word.

describe("#morseEncode", function() {
  it("should do a simple letter", function() {
    expect(morseEncode("q")).toEqual("--.-");
  });

  it("should handle a small word", function() {
    expect(morseEncode("cat")).toEqual("-.-. .- -");
  });

  it("should handle a phrase", function() {
    expect(morseEncode("cat in hat")).toEqual("-.-. .- -  .. -.  .... .- -");
  });
});
