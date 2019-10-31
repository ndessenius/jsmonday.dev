---
path: "/1/the-awesome-map-method"
date: "2019-05-04"
title: "The Awesome .map Method"
author: "Michele Riva"
---

Let’s say you have an array of **N** numbers and you want to multiply each number by 2.

## Bad Practice

```javascript
var arr = [0, 1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  arr[i] = i * 2;
}
```

1. This way, you will mutate your original array. You won’t be able to access your original array again.
2. It’s hard to read. Loops are efficient but really hard to read due to their imperative nature.
3. Hard to maintain. Loops themselves are hard to maintain. Nested loops and conditions inside of them are hell.

## Better practice

```javascript
const arr = [0, 1, 2, 3, 4, 5];
const newArray = arr.map(number => number * 2);
```

The `Array.map` method will solve you a lot of problem.
The code will become **declarative**, describing your resulting data and how you will get it.
You can read the code above as:

“`newArray` is a list of number, where each number the product of the multiplication by 2 of every number contained in `arr`”.

Try to do the same with the previous example, it won’t be easy!
It will be easier to maintain thanks to its declarative nature, fastest to write and to explain.

# Anatomy of the .map method

```javascript
[1, 2, 3, 4] // an array of any type
  .map(
    (
      // method name
      item, // single array element
      index // current element index
    ) => {} // callback function to be applied to each array element
  );
```

`.map` method can be used against any kind of array (array of strings, integers, undefined values and so on).
It will accept a `function` as argument, where you’ll have access to every single array element and its corresponding index.

See the examples below:

```javascript
const integers = [1, 2, 3, 4, 5].map(item => item * 2);
// => [2, 4, 6, 8, 10]

const strings = ["one", "two", "three"].map(
  (item, index) => `${index + 1} ${item}`
);
// ["1 one", "2 two", "3 three"]

const mixedTypes = [undefined, null, "foo", 123, NaN, Symbol].map(
  item => typeof item
);
// ["undefined", "object", "string", "number", "number", "function"]
```

You can always add any kind of expression inside your `map` body:

```javascript
[1, 2, 3, 4, 5].map(item => {
  const evenOrOdd = item % 2 > 0 ? "odd" : "even";
  console.log(`${item} is ${evenOrOdd}`);

  return evenOrOdd;
});

// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// ["odd", "even", "odd", "even", "odd"]
```

But remember to `return` a value. Otherwise, you’re gonna get the following result:

```javascript
[1, 2, 3, 4, 5].map(item => {
  const evenOrOdd = item % 2 > 0 ? "odd" : "even";
  console.log(`${item} is ${evenOrOdd}`);
});

// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// [undefined, undefined, undefined, undefined, undefined]
```
