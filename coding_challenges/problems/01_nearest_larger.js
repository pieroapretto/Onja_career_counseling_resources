 // Write a function, `nearestLarger(arr, i)` which takes an array and an
 // index.  The function should return another index, `j`

 // Index `j` should satisfy two contitions:
 // (a) `arr[i] < arr[j]`, AND
 // (b) there is no other index closer to i than j where `arr[i] < arr[j]`

 // In case of ties (see example below), choose the earliest (left-most)
 // of the two indices. If no number in `arr` is larger than `arr[i]`,
 // return `null`.

const nearestLarger = (arr=[3, 9, 7, 0, 8], index=2) => {

}

module.exports = nearestLarger;