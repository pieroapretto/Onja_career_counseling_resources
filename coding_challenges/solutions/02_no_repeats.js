// For this problem, I broke the problem up into two smaller problems.
// By creating the function `noRepeat` we are able to pass a single
// year to determine if that year contains repeat integers.

// This way as we are iterating over the range we can decide if the
// year should be included in our array of no repeating years or not

function noRepeats(yearStart, yearEnd) {
  var i;
  var years = [];

  for (i = yearStart; i <= yearEnd; i++) {
    if (noRepeat(i)) {
      years.push(i);
    }
  }

  return years;
}

// Here we iterate over the integer, and check against
// an object.  If the object is already populated with
// the integer, we know it is a repeat and can return false.

function noRepeat(year) {
  var yearMap = {};
  var intArr = year.toString().split('');

  for (var i = 0; i < intArr.length; i++) {
    if (yearMap[intArr[i]]) {
      return false;
    }

    yearMap[intArr[i]] = true;
  }

  return true;
}
