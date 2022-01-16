# Dynamic looping

## How a `for` loop works

A `for` loop consists of 3 parts. 1) A dynamic variable that is subject to change 2) A conditional statement that if true, executes the loop logic 3) an iretation statement that changes the dynamic variable

How a `for` loop works:

```js
for (
    let i=0; // dynamic variable

    i < 3; // conditional statement on dynamic variable

    i++; // iteration statement on dynamic variable
)
```

## 1) Setting a dynamic variable

A dynamic variable can be set inside or outside a loop.

```js

// BLOCK #1
for (
    let i=0;
    i < 3;
    i++;
)

// BLOCK #2
let i=0

for (
    ;
    i < 3;
    i++;
)

// both BLOCK #1 and #2 operate the same
```

## 2) Setting a conditional statement

A conditional statement can read multiple dynamic variables. However, it must evaluate to a boolean.

```js
let stoppingPoint = 4 / 2;

for (
    let i=0;
    i < stoppingPoint
    i++;
)

// loop will run twice
```

## 3) Setting an iteration statement

Iteration statements traditionally increment the dynamic variable by one. However, you can decrement the value or update it based on your needs

```js

for (
    let i=10;
    i > 0
    i--;
)

// loop will run 10 times
```

```js

for (
    let i=10;
    i > 0;
    i -= 2;
)

// loop will run 5 times
```

## When to use a `while` loop

While loops are useful when you want to loop under mutliple conditions or when you want to manage multiple dynamic variables

```js
let i = 0;
let j = 5;

while ( i < 10 && j < 10 ) {
  i++;
  j++;
}

// loop will stop when i equals 5 and j equals 10
```

```js
let i = 5;
let j = 5;

while ( i > 0 && j < 15 ) {
  i--;
  j++;
}

// loop will stop when i equals 0 and j equals 10
```

Dynamic variables can still be used to access array items by their index value

```js
let arr = ['cat', 'chicken', 'dog'];
let i = 0;

while ( i < arr.length ) {
  arr[i] += '!';
  i++;
}

// arr now equals ['cat!', 'chicken!', 'dog!']
```

```js
let arr = ['cat', 'chicken', 'dog', 'duck'];
let i = 1;
let j = 2;
let newArray = [];

while ( i >= 0 && j <= arr.length - 1 ) {
  let firstAnimal = arr[i];
  let secondAnimal = arr[j];

  newArray.unshift(firstAnimal)
  newArray.push(secondAnimal)

  i--;
  j++;
}

// newArray now equals ['cat', 'chicken', 'dog', 'duck'] after 2 loops
```


