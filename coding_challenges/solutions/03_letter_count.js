// This problem used some similar logic to last weeks problems.  We are tasked
// with receiving a string as an input and returning an object containing the
// letters in the string as keys and the number of times they are used as values.

// The approach I took here was to first remove all the white space from the
// string using a Regex statement. Another approach would have been to check if
// the "letter" was an empty string, so something like `if (letter === '')`
// This way we could have skipped any additional logic that would update the count.

function letterCount(str) {
  // Using a RegularExpression to replace all the white space in the string
  var letterArray = str.replace(/ /g,'').split('');
  var letterCount = {};

  letterArray.forEach(function(letter) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1
    } else {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
}
