var wonkyCoins = require('../coding_challenges/problems/05_wonky_coins');

// Catsylvanian money is a strange thing: they have a coin for every
// denomination (including zero!). A wonky change machine in
// Catsylvania takes any coin of value N and returns 3 new coins,
// valued at N/2, N/3 and N/4 (rounding down).
//
// Write a method `wonkyCoins(n)` that returns the number of coins you
// are left with if you take all non-zero coins and keep feeding them
// back into the machine until you are left with only zero-value coins.
//
// Hint: You may need to use recursion to solve this problem! If you do take
// this approach, it may be helpful to break the recursive logic into its own function
//
// Hint: If you are using recursion, you will end up with nested arrays with
// coins in side of them.  Though, we want to get the count of all the coins.
// Javascript does not have a 'flatten' method out of the box, so we have
// included an npm package 'array-flatten' to accomplish this for us.
// Be sure to run `npm install` in order to use the package!

describe('wonkyCoins', function() {
  it('handles a simple case', function() {
    expect(wonkyCoins(1)).toEqual(3);
  });

  it('handles a larger case', function() {
    expect(wonkyCoins(5)).toEqual(11);
  });

  it('handles being given the zero coin', function() {
    expect(wonkyCoins(0)).toEqual(1);
  });
});
