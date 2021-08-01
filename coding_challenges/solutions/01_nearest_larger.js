// For this problem I will offer you two solutions.

// 1. This may be your first attempt to solve this
//
// Here we iterate over the entire array, from the first index to the last, if
// at any time we find a larger number than the given value we check to see if
// the distance is smaller than the last larger number, if it is we update our variables.

// As you may have guessed, this is not the most optimized way to solve this problem.
// If we have an array of 1,000,000 numbers we are checking each number
// to find the closest larger number.

// We can probably do better.

function nearestLarger(arr, i) {
  var value = arr[i];
  var largerIndex = null;
  var largerDistance;

  arr.forEach(function(num, index) {
    if (index === i) {
      return;
    }

    if (num > value && (Math.abs(i - index) < largerDistance || !largerDistance)) {
      largerIndex = index;
      largerDistance = Math.abs(i - index);
    }

  });

  return largerIndex;
}

// 2. A more optimized solution
//
// This solution we start from the index and work out from there, this way as
// soon as we find a larger number we are able to return.
//
// In a worst case scenario our index is right in the middle of the array and
// the largest number is at the very end.
//
// In a best case, the larger number is immediately to the left of our
// starting index in which case our loop runs only one time.
function nearestLarger(arr, i) {
  var diff = 1;
  var left = i;
  var right = i;

  while (left >= 0 || right < arr.length) {
    left = i - diff;
    right = i + diff;

    if (left >= 0 && arr[left] > arr[i]) {
      return left;
    } else if (right < arr.length && arr[right] > arr[i]) {
      return right;
    }

    diff += 1;
  }

  return null;
}
