// This problem can best be solved with recursion,
// calling a function inside of it's self.

var flatten = require('array-flatten');

function wonkyCoins(n) {
  // If we are passed a 0 return 1
  if (n === 0) { return 1; }

  // Otherwise run our recursive function and
  // return the length of that array flattened
  return flatten(wonkyRecurs(n)).length;
}

function wonkyRecurs(n) {
  // This is our base statement, if the n we receive is 0, return it
  if (n === 0 ) return n;

  // Else return an array of values passed to our recursive function
  return [
    wonkyRecurs(Math.floor(n / 2)),
    wonkyRecurs(Math.floor(n / 3)),
    wonkyRecurs(Math.floor(n / 4))
  ];
}

// Example:
// wonkyCoins(2) => 5
//
// We pass 2 as the argument to wonkyCoins it is not 0, so we enter our recursive function
// Inside of wonkyRecurs we do not hit our base case the first time, so now we
// move to the return statement
// return [ wonkyRecurs(1), wonkyRecurs(0), wonkyRecurs(0) ]
//
// This creates 3 calls to wonkyRecurs, two of which hit the base statement, and will return 0
// [ wonkyRecurs(1), 0, 0 ]
//  ************ The execution here is out of order, but it works for teaching purposes ********
//
// Now we are dealing with wonkyRecurs(1);
// It does not hit the base case so we enter in another recursive call cycle
// [ wonkyRecurs(0), wonkyRecurs(0), wonkyRecurs(0) ]
// Each of these statements will hit the base case and return 0's
// [0, 0, 0]
//
// So now [ wonkyRecurs(1), 0, 0] => [[0, 0, 0], 0, 0]
// All that is left to do is flatten the array, and retrieve the length => 5
//
// While recursion is rarely the best solution to a problem, it is a powerful
// tool to have in your tool-belt it is especially powerful when dealing with traversing tries
