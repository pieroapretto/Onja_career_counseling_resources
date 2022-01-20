// For this problem, I broke the problem up into two smaller problems.
// By creating the function `noRepeat` we are able to pass a single
// year to determine if that year contains repeat integers.

// This way as we are iterating over the range we can decide if the
// year should be included in our array of no repeating years or not

function noRepeats(yearStart, yearEnd) {
  var yearsList = [];

  for (let year = yearStart; year <= yearEnd; year++) {
    if (noRepeat(year)) {
      yearsList.push(year);
    }
  }

  return yearsList;
}

function noRepeat(year) {
  var intArr = year.toString().split('');
  var uniqueNumbers =  [...new Set(intArr)];
  return intArr.length === uniqueNumbers.length
}
