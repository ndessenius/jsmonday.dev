---
path: "/2/the-formidable-es6-spread-operator"
date: "2019-02-26"
title: "The Formidable ES6 Spread Operator"
author: "Michele Riva"
---

Let’s say you want to concatenate two arrays.

## Bad Practice

```javascript
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

for (var el of array2) {
  array1.push(el);
}

console.log(array1);
// => [1, 2, 3, 4, 5, 6]
```

1. This way, you will mutate your original array. You won’t be able to access your original array again.
2. It’s hard to read. Loops are efficient but really hard to read due to their imperative nature.
3. Hard to maintain. What if you need to concatenate a third array? Or a fourth one?

## Best Practice

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

console.log(array3);
// => [1, 2, 3, 4, 5, 6]
```

Wow! What happened here? We concatenated two array using the **spread operator** (triple dot syntax).
JavaScript interpreter will read “`array3` is an array containing every `arr1`and `arr2` element” (such a declarative approach!).
But what else can you do with this awesome operator?

# Creating a new array from zero

You can easily create a new array of **N** elements in one line:

```javascript
const myNewArray = [...Array(5)];

console.log(myNewArray);
// => [undefined, undefined, undefined, undefined, undefined]
```

But hey, every created value is undefined!
Yes, they are! That’s because you are just creating an array on **N** elements without defining what every single element is.
How is it useful?
In [the previous episode](https://jsmonday.dev/articles/1/the-awesome-map-method) we talked about the `.map` method: using both .`map` and spread operator, we can easily create (as an example) an array of numbers:

```javascript
const myNewArray = [...Array(5)].map((_, i) => i);

console.log(myNewArray);
// => [0, 1, 2, 3, 4]
```

This is powerful!

# Copying objects by value

Thanks to the spread operator, we can easily coping objects **by value**instead of **reference**. Let me explain that:

```javascript
const obj1 = {
  one: 1,
  two: 2
};

const copy = obj1;

copy.one = 2;

console.log(obj1); // => { one: 2, two: 2 }
console.log(copy); // => { one: 2, two: 2 }
```

Wait wait wait! Why does `obj1.one` return `2`? I updated `copy`‘s `one` property, not the `obj1`‘s one!
False! We explicitly said that `copy` is bound to `obj1`. Everytime we update `copy` structure, we also alterate `obj1`, and that’s terrible!

We can easily solve this problem using the spread operator: instead of passing `obj1` by reference, we’ll just copy all of its keys and values inside of the `copy` object.
That way, once we mutate any `copy` key, we’ll leave unchanged the original `obj1` object.

# Function arguments

In ES5, this was a common practice:

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const args = [0, 1, 2];

console.log(sum.apply(null, args)); // => 3
```

If you wanted to use an array as a function argument, you had to use the `Function.prototype.apply` method.
In ES6 you can easily achieve that by using the spread operator:

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const args = [0, 1, 2];

console.log(sum(...args)); // => 3
```

And what if you want to get every single function argument without knowing how many arguments you’ll receive?

```javascript
function sum(...arguments) {
  return [...arguments].reduce((acc, n) => acc + n);
}

console.log(sum(1, 2, 3, 4, 5)); // => 15
```

And now let’s combined everything we’ve learnt so far!

```javascript
const result = sum(...[...Array(100)].map((_, i) => i));

console.log(result); // => 4950
```

Wow! At first this seems to be a little complicated, but now I bet that you’re reading and enjoying it!
