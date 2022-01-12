// Common JS operations

// here are some example variables
let arr = [1,2,3,'a','b','c', true, { name: 'Manjaka'}]
let count = 0;

// // remove elements from an array

    // - remove by index
    arr.splice()
    // - removes first element from array
    arr.shift()

    // - removes last element from array
    arr.pop()

    // - remove several elements from array based on condition
    arr.filter()

// // adding elements to an array

    // - replace at index value
    arr.splice()

    // - add to front of array
    arr.unshift()

    // - add to back of array
    arr.push()

    // - rewrite by index value
    arr[indexValue] = newValue

// check if single value exists inside of an array

    // - check at index value if condition
    arr[indexValue] === valueToCheck

    // - find index value of value
    arr.indexOf(valueToCheck)

    // - return the value we are checking for
    arr.find(item => item === valueToCheck)

    // - return boolean if value exists in array
    arr.includes(valueToCheck)

// checking if multiple values exists inside an array

// We can us LOOPS to check every value inside an array

// use one of the 2 methods for checking a single value

    //arr.forEach()

        // allows us to loop through a static array

    // for loop

        // allows us to loop based on a conditional statement that can be dynamic

// check if two things are true

    // use the AND operator &&

// check if one of two things are true

    // use the OR operator ||

// changing values inside an array

    // use a state value OR use a variable, increment variable based on condition

    // increamenting logic
    // count = count + 1;
    // count++; 