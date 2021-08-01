var wordUnscrambler = require('../coding_challenges/problems/07_word_unscrambler');

// Write a function word_unscrambler that takes two inputs: a scrambled
// word and a dictionary of real words.  Your program must then output
// all words that our scrambled word can unscramble to.

describe('wordUnscrambler', function() {
  it("handles a simple word", function() {
    expect(wordUnscrambler("cat", ["tac"])).toEqual(["tac"]);
  });

  it("does not inappropriately choose a word", function() {
    expect(wordUnscrambler("cat", ["tom"])).toEqual([]);
  });

  it("handles a simple word from a larger dictionary", function() {
    expect(wordUnscrambler("cat", ["tic", "toc", "tac", "toe"])
  ).toEqual(["tac"]);
  });

  it("only handles words of the correct length", function() {
    expect(wordUnscrambler("cat", ["scatter", "tac", "ca"] )).toEqual(["tac"]);
  });

  it("handles multiple successful cases", function() {
    expect(wordUnscrambler("turn", ["numb", "turn", "runt", "nurt"]))
      .toEqual(["turn", "runt", "nurt"]);
  });
});
