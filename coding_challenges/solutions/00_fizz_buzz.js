function fizzBuzz(start, end) {
    var i;
    var fizzBuzzArr = [];
  
    for (i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArr.push('FizzBuzz');
      } else if (i % 3 === 0) {
        fizzBuzzArr.push('Fizz');
      } else if (i % 5 === 0) {
        fizzBuzzArr.push('Buzz');
      }
    }
  
    return fizzBuzzArr;
}
  