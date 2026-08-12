# 🚀 JavaScript PART 2 — Functions, Scope, Objects & Arrays

You've completed the Part 1 foundation. Now we're entering the part where JavaScript starts becoming **real programming**.

Part 2 is much more important than Part 1 because almost every serious JavaScript application uses these concepts.

---

# 🧭 PART 2 ROADMAP

We will cover:

### A — Functions

1. What is a function?
2. Why functions exist
3. Function declaration
4. Parameters
5. Arguments
6. Return
7. Function expressions
8. Arrow functions
9. Default parameters
10. Rest parameters
11. Callback functions

### B — Scope & Execution

12. Global scope
13. Function scope
14. Block scope
15. Lexical scope
16. Scope chain
17. Hoisting
18. Temporal Dead Zone
19. Execution context
20. Call stack

### C — Objects

21. Creating objects
22. Properties
23. Methods
24. Accessing properties
25. Adding/removing properties
26. Nested objects
27. `this`
28. Object destructuring
29. Spread operator
30. Optional chaining

### D — Arrays

31. Creating arrays
32. Indexing
33. Modifying arrays
34. `push`
35. `pop`
36. `shift`
37. `unshift`
38. `slice`
39. `splice`
40. `includes`
41. `indexOf`
42. `map`
43. `filter`
44. `find`
45. `some`
46. `every`
47. `reduce`
48. `sort`
49. Array destructuring

### E — Advanced Function Concepts

50. Closures
51. Higher-order functions
52. Callback patterns
53. Functions as values
54. Pure functions
55. Immutability basics

We'll go through them systematically.

---

# PART 2 — CHAPTER 1

# 🔥 FUNCTIONS

## 1. Why do we need functions?

Imagine you have:

```text
console.log("Welcome Param");
console.log("Welcome Rahul");
console.log("Welcome Amit");
console.log("Welcome Raj");
```

There's repetition.

Instead, we can create a reusable piece of code:

```javascript
function greet() {
    console.log("Welcome!");
}
```

Then:

```javascript
greet();
greet();
greet();
```

Output:

```text
Welcome!
Welcome!
Welcome!
```

A function is essentially a **reusable block of behavior**.

---

# 2. Function anatomy

Look at:

```javascript
function greet() {
    console.log("Hello");
}
```

Break it down:

```text
function
   ↓
keyword

greet
   ↓
function name

()
   ↓
parameters

{}
   ↓
function body
```

Calling it:

```javascript
greet();
```

means:

> Execute the function.

---

# 3. Parameters

Functions become much more useful when we give them data.

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

Now:

```javascript
greet("Param");
greet("Rahul");
greet("Amit");
```

Output:

```text
Hello Param
Hello Rahul
Hello Amit
```

Here:

```text
name
```

is the **parameter**.

---

# 4. Parameter vs Argument

This distinction is important.

```javascript
function greet(name) {
    console.log(name);
}
```

`name` is the **parameter**.

When you do:

```javascript
greet("Param");
```

`"Param"` is the **argument**.

Think:

```text
Function definition
        ↓
Parameter

Function call
        ↓
Argument
```

---

# 5. Multiple parameters

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

Here:

```text
a = 10
b = 20
```

---

# 6. Return

This is one of the most important concepts in functions.

Consider:

```javascript
function add(a, b) {
    console.log(a + b);
}
```

This prints the result, but doesn't give the result back to the caller.

Instead:

```javascript
function add(a, b) {
    return a + b;
}
```

Now:

```javascript
const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

Think:

```text
add(10,20)
     ↓
   30
     ↓
result
```

---

# 7. Why `return` matters

You can use the returned value elsewhere:

```javascript
function calculatePrice(price, quantity) {
    return price * quantity;
}

const total = calculatePrice(100, 3);

console.log(total);
```

Output:

```text
300
```

Then:

```javascript
const finalPrice = total + 50;
```

This is why functions are so powerful.

---

# 8. `return` stops the function

Example:

```javascript
function test() {
    console.log("A");

    return;

    console.log("B");
}

test();
```

Output:

```text
A
```

`"B"` never executes.

---

# 9. Function with condition

```javascript
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));
console.log(checkAge(15));
```

Output:

```text
Adult
Minor
```

---

# 10. Function expressions

Functions can also be stored inside variables.

```javascript
const add = function(a, b) {
    return a + b;
};
```

Then:

```javascript
console.log(add(10, 20));
```

This works because **functions are values in JavaScript**.

That's a fundamental JavaScript concept.

---

# 11. Arrow functions

Modern JavaScript introduced a shorter syntax.

Instead of:

```javascript
const add = function(a, b) {
    return a + b;
};
```

we can write:

```javascript
const add = (a, b) => {
    return a + b;
};
```

Even shorter:

```javascript
const add = (a, b) => a + b;
```

This is called an **arrow function**.

---

# 12. One parameter

You can write:

```javascript
const square = (number) => {
    return number * number;
};
```

And:

```javascript
const square = number => number * number;
```

Both work.

---

# 13. No parameters

```javascript
const sayHello = () => {
    console.log("Hello");
};
```

Call:

```javascript
sayHello();
```

---

# 14. Default parameters

Suppose:

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

If we call:

```javascript
greet();
```

we get:

```text
Hello undefined
```

We can provide a default:

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}
```

Now:

```javascript
greet();
```

gives:

```text
Hello Guest
```

---

# 15. Rest parameters

Suppose we want a function that accepts any number of numbers.

```javascript
function add(...numbers) {
    console.log(numbers);
}
```

Then:

```javascript
add(10, 20, 30, 40);
```

The `...numbers` collects the arguments.

Conceptually:

```text
10
20
30
40
 ↓
numbers
 ↓
[10,20,30,40]
```

Notice something important:

**Now we've introduced arrays.**

We'll study them properly shortly.

---

# 16. Functions can be passed around

This is where JavaScript becomes interesting.

Consider:

```javascript
function greet() {
    console.log("Hello");
}

function executeSomething(fn) {
    fn();
}

executeSomething(greet);
```

Output:

```text
Hello
```

We passed a function into another function.

This is called a **callback**.

---

# 17. Callback function

Example:

```javascript
function processUser(name, callback) {
    console.log("Processing " + name);

    callback();
}

processUser("Param", function() {
    console.log("Done");
});
```

Output:

```text
Processing Param
Done
```

Callbacks become extremely important when we reach:

```text
Promises
async/await
events
DOM
Node.js
React
```

---

# 🧠 PART 2 — CHAPTER 2

# SCOPE

Now we're entering a concept that separates people who **know JavaScript syntax** from people who **understand JavaScript**.

---

# 18. What is scope?

Scope determines:

> Where a variable can be accessed.

Example:

```javascript
const name = "Param";

function greet() {
    console.log(name);
}

greet();
```

This works.

Why?

Because the function can access the variable from its outer scope.

---

# 19. Function scope

```javascript
function test() {

    const message = "Hello";

    console.log(message);
}

test();
```

But:

```javascript
console.log(message);
```

doesn't work.

Why?

Because `message` exists inside the function.

---

# 20. Block scope

Remember:

```javascript
if (true) {
    let age = 20;
}
```

This won't work:

```javascript
console.log(age);
```

because `let` is block-scoped.

Same with:

```javascript
const
```

---

# 21. `var` behaves differently

```javascript
if (true) {
    var age = 20;
}

console.log(age);
```

This works.

That's one reason modern JavaScript generally prefers:

```text
let
const
```

over:

```text
var
```

---

# 22. Lexical scope

Consider:

```javascript
const username = "Param";

function outer() {

    const age = 20;

    function inner() {
        console.log(username);
        console.log(age);
    }

    inner();
}

outer();
```

`inner()` can access:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

This is the **scope chain**.

---

# 23. Scope chain

Imagine:

```javascript
const a = 10;

function outer() {

    const b = 20;

    function inner() {

        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}
```

When JavaScript looks for `a`:

```text
inner
 ↓
outer
 ↓
global
```

It searches outward until it finds it.

---

# 24. Hoisting

Now an important JavaScript behavior.

Consider:

```javascript
console.log(name);

var name = "Param";
```

You might expect an error.

But with `var`, JavaScript behaves approximately like:

```javascript
var name;

console.log(name);

name = "Param";
```

So the output is:

```text
undefined
```

This behavior is related to **hoisting**.

---

# 25. `let` and `const` hoisting

Consider:

```javascript
console.log(name);

let name = "Param";
```

This produces an error.

Same for:

```javascript
console.log(name);

const name = "Param";
```

The reason involves something called the:

> **Temporal Dead Zone (TDZ)**

We'll go deeper into this later.

---

# 26. Call Stack

Now let's understand something fundamental about function execution.

```javascript
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();
```

Think:

```text
two()
 ↓
one()
 ↓
console.log()
```

The JavaScript engine uses a **call stack** to keep track of function execution.

Conceptually:

```text
        ┌───────────────┐
        │ console.log   │
        ├───────────────┤
        │ one()         │
        ├───────────────┤
        │ two()         │
        └───────────────┘
```

Functions finish in reverse order.

We'll revisit the call stack when we study asynchronous JavaScript.

---

# 🧠 PART 2 — CHAPTER 3

# OBJECTS

Now we're moving into one of JavaScript's most important data structures.

---

# 27. What is an object?

Suppose we want to represent a student.

Without an object:

```javascript
const name = "Rahul";
const age = 20;
const city = "Pune";
const course = "IT";
```

That's messy.

Instead:

```javascript
const student = {
    name: "Rahul",
    age: 20,
    city: "Pune",
    course: "IT"
};
```

Now all related data is grouped together.

---

# 28. Accessing properties

Dot notation:

```javascript
console.log(student.name);
```

Output:

```text
Rahul
```

Another:

```javascript
console.log(student.age);
```

Output:

```text
20
```

---

# 29. Bracket notation

You can also write:

```javascript
console.log(student["name"]);
```

This is especially useful when the property name is dynamic.

---

# 30. Changing properties

```javascript
student.age = 21;
```

Now:

```javascript
console.log(student.age);
```

returns:

```text
21
```

---

# 31. Adding properties

```javascript
student.grade = "A";
```

Now the object has:

```text
name
age
city
course
grade
```

---

# 32. Deleting properties

```javascript
delete student.grade;
```

Now `grade` is removed.

---

# 33. Methods

An object can contain functions.

```javascript
const user = {

    name: "Param",

    greet: function() {
        console.log("Hello");
    }

};
```

Then:

```javascript
user.greet();
```

---

# 34. Modern method syntax

Instead of:

```javascript
greet: function() {
    console.log("Hello");
}
```

you can write:

```javascript
const user = {

    name: "Param",

    greet() {
        console.log("Hello");
    }

};
```

Cleaner.

---

# 35. `this`

Now one of the most famous JavaScript concepts.

```javascript
const user = {

    name: "Param",

    greet() {
        console.log(this.name);
    }

};

user.greet();
```

Output:

```text
Param
```

Inside the method:

```text
this.name
```

refers to the object's `name` property for this call.

`this` becomes much more complicated with:

```text
arrow functions
constructors
classes
call
apply
bind
events
```

We'll dedicate serious attention to it later.

---

# 36. Destructuring

Instead of:

```javascript
const name = student.name;
const age = student.age;
const city = student.city;
```

we can write:

```javascript
const { name, age, city } = student;
```

Now:

```javascript
console.log(name);
console.log(age);
console.log(city);
```

This is **object destructuring**.

You'll use this constantly in React and Node.js.

---

# 37. Spread operator

Suppose:

```javascript
const user = {
    name: "Param",
    age: 20
};
```

We can create another object:

```javascript
const updatedUser = {
    ...user,
    age: 21
};
```

Now:

```text
updatedUser
    ↓
name: Param
age: 21
```

The `...` syntax is extremely important in modern JavaScript.

---

# 38. Optional chaining

Optional chaining allows you to safely access nested properties that might not exist.

Suppose:

```javascript
const user = {
    profile: {
        name: "Param"
    }
};
```

You can write:

```javascript
console.log(user.profile?.name);
```

Output:

```text
Param
```

If `profile` doesn't exist:

```javascript
const user = {};

console.log(user.profile?.name);
```

The result is:

```text
undefined
```

instead of throwing an error.

This is especially useful when working with API responses.

---

# 🧠 PART 2 — CHAPTER 4

# ARRAYS

An array stores multiple values.

```javascript
const numbers = [10, 20, 30, 40];
```

Think:

```text
Index:    0    1    2    3
          ↓    ↓    ↓    ↓
Value:   10   20   30   40
```

---

# 39. Accessing array elements

```javascript
console.log(numbers[0]);
```

Output:

```text
10
```

```javascript
console.log(numbers[2]);
```

Output:

```text
30
```

JavaScript arrays are **zero-indexed**.

---

# 40. Array length

```javascript
console.log(numbers.length);
```

Output:

```text
4
```

---

# 41. `push`

Adds to the end.

```javascript
numbers.push(50);
```

Now:

```text
[10, 20, 30, 40, 50]
```

---

# 42. `pop`

Removes the last item.

```javascript
numbers.pop();
```

Now:

```text
[10, 20, 30, 40]
```

---

# 43. `shift`

Removes the first element.

```javascript
numbers.shift();
```

---

# 44. `unshift`

Adds to the beginning.

```javascript
numbers.unshift(5);
```

---

# 45. `slice`

`slice()` creates a portion of an array without modifying the original.

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);
```

Result:

```text
[20, 30, 40]
```

The ending index isn't included.

---

# 46. `splice`

`splice()` modifies the original array.

```javascript
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);
```

Now:

```text
[10, 40]
```

It removed:

```text
20
30
```

Be careful:

```text
slice  → doesn't modify original
splice → modifies original
```

---

# 47. `includes`

```javascript
const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana"));
```

Output:

```text
true
```

---

# 48. `indexOf`

```javascript
console.log(fruits.indexOf("mango"));
```

Output:

```text
2
```

---

# 🔥 49. `map()`

This is extremely important.

Suppose:

```javascript
const numbers = [1, 2, 3, 4];
```

We want:

```text
2
4
6
8
```

We can do:

```javascript
const doubled = numbers.map(number => number * 2);
```

Result:

```text
[2, 4, 6, 8]
```

Conceptually:

```text
1 → 2
2 → 4
3 → 6
4 → 8
```

`map()` transforms every element.

---

# 50. `filter()`

Suppose:

```javascript
const numbers = [10, 15, 20, 25, 30];
```

We want only numbers >= 20:

```javascript
const result = numbers.filter(number => number >= 20);
```

Result:

```text
[20, 25, 30]
```

Think:

```text
map
↓
transform

filter
↓
select
```

---

# 51. `find()`

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.find(number => number > 25);
```

Result:

```text
30
```

`find()` returns the **first matching element**.

---

# 52. `some()`

Checks whether at least one element matches.

```javascript
const numbers = [10, 20, 30];

numbers.some(number => number > 25);
```

Result:

```text
true
```

Because 30 is greater than 25.

---

# 53. `every()`

Checks whether all elements match.

```javascript
const numbers = [10, 20, 30];

numbers.every(number => number > 5);
```

Result:

```text
true
```

Every number is greater than 5.

---

# 54. `reduce()`

This is one of the most powerful array methods.

Suppose:

```javascript
const numbers = [10, 20, 30];
```

We want the total:

```javascript
const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);
```

Result:

```text
60
```

Think:

```text
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
```

`reduce()` takes many values and produces one result.

---

# 55. `sort()`

`sort()` is used to arrange array elements.

For strings:

```javascript
const fruits = ["mango", "apple", "banana"];

fruits.sort();

console.log(fruits);
```

Result:

```text
["apple", "banana", "mango"]
```

For numbers, be careful.

By default, `sort()` converts values to strings before comparing them.

So:

```javascript
const numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);
```

may produce:

```text
[10, 2, 30, 5]
```

For numerical sorting, use a comparison function:

```javascript
const numbers = [10, 2, 30, 5];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Result:

```text
[2, 5, 10, 30]
```

Descending:

```javascript
numbers.sort((a, b) => b - a);
```

---

# 56. Array destructuring

```javascript
const numbers = [10, 20, 30];

const [first, second, third] = numbers;
```

Now:

```text
first  = 10
second = 20
third  = 30
```

---

# 57. Rest and spread

These look identical:

```text
...
```

but their purpose depends on where they're used.

### Rest

Collects values:

```javascript
function add(...numbers) {
}
```

### Spread

Expands values:

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];
```

This distinction is important.

---

# 🧠 PART 2 — CHAPTER 5

# CLOSURES

Now we're reaching a concept that is **very important for becoming strong in JavaScript**.

Consider:

```javascript
function outer() {

    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}
```

Now:

```javascript
const fn = outer();

fn();
```

Output:

```text
Hello
```

But `outer()` already finished.

So how does `inner()` still access `message`?

Because `inner()` **remembers the lexical environment where it was created**.

That's a closure.

---

# 58. Practical closure example

```javascript
function createCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}
```

Now:

```javascript
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
3
```

The variable:

```text
count
```

is private to the returned function.

This pattern is extremely important.

---

# 59. Higher-order functions

A **higher-order function** is a function that either:

1. Takes another function as an argument
2. Returns another function
3. Or both

Example:

```javascript
function execute(fn) {
    fn();
}

execute(() => {
    console.log("Hello");
});
```

Here `execute()` receives a function.

Another example:

```javascript
function createMultiplier(multiplier) {

    return function(number) {
        return number * multiplier;
    };

}

const double = createMultiplier(2);

console.log(double(10));
```

Output:

```text
20
```

`createMultiplier()` returns a function, so it is a higher-order function.

---

# 60. Functions as values

Functions can be stored in variables:

```javascript
const greet = function() {
    console.log("Hello");
};
```

Functions can be stored in objects:

```javascript
const user = {
    greet: function() {
        console.log("Hello");
    }
};
```

Functions can be stored in arrays:

```javascript
const actions = [
    function() {
        console.log("Login");
    },

    function() {
        console.log("Logout");
    }
];
```

Functions can be passed as arguments:

```javascript
function execute(fn) {
    fn();
}

execute(greet);
```

Functions can also be returned:

```javascript
function createFunction() {

    return function() {
        console.log("Hello");
    };

}
```

This is why JavaScript is often described as having **first-class functions**.

---

# 61. Pure functions

A pure function has two important properties:

1. Same input → same output
2. No unwanted side effects

Example:

```javascript
function add(a, b) {
    return a + b;
}
```

For:

```javascript
add(10, 20);
```

the result is always:

```text
30
```

A function like this is predictable.

---

# 62. Impure function

Consider:

```javascript
let total = 0;

function addToTotal(value) {
    total += value;
}
```

The function changes an outside variable.

That is a side effect.

Therefore, it is not a pure function.

---

# 63. Immutability basics

Immutability means avoiding unnecessary modification of existing data.

Instead of:

```javascript
const numbers = [1, 2, 3];

numbers.push(4);
```

you can create a new array:

```javascript
const numbers = [1, 2, 3];

const updatedNumbers = [...numbers, 4];
```

Original:

```text
[1, 2, 3]
```

New:

```text
[1, 2, 3, 4]
```

This style becomes extremely important in:

```text
React
Redux
State management
Functional programming
```

---

# 🎯 PART 2 — THE BIG PICTURE

You should now see this structure:

```text
                    JAVASCRIPT
                         │
          ┌──────────────┴──────────────┐
          │                             │
       FUNCTIONS                      DATA
          │                             │
    ┌─────┼─────┐                  ┌────┴────┐
    │     │     │                  │         │
 Parameters Return Arrow        Objects    Arrays
    │                             │         │
    │                           this      map
    │                           methods   filter
    │                           destruct. reduce
    │                                     find
    │
   Scope
    │
 ┌──┼───────────────┐
 │  │               │
Global Function   Block
 │
Lexical Scope
 │
Scope Chain
 │
Closures
```

---

# 🧠 PART 2 — CORE MENTAL MODEL

By now, you should start thinking about JavaScript like this:

```text
JavaScript
    ↓
Values
    ↓
Variables
    ↓
Functions
    ↓
Scope
    ↓
Objects
    ↓
Arrays
    ↓
Callbacks
    ↓
Higher-order Functions
    ↓
Closures
```

And when you see code like:

```javascript
const users = [
    { name: "Param", age: 20 },
    { name: "Rahul", age: 17 },
    { name: "Amit", age: 25 }
];

const adults = users
    .filter(user => user.age >= 18)
    .map(user => user.name);

console.log(adults);
```

You should be able to understand:

```text
users
  ↓
Array
  ↓
Objects
  ↓
filter()
  ↓
Callback function
  ↓
Select matching objects
  ↓
map()
  ↓
Transform objects into names
```

Result:

```text
["Param", "Amit"]
```

---

# 🚀 WHAT YOU SHOULD KNOW AFTER PART 2

You should now understand:

- Functions
- Function declarations
- Parameters
- Arguments
- Return values
- Function expressions
- Arrow functions
- Default parameters
- Rest parameters
- Callback functions
- Functions as values
- Global scope
- Function scope
- Block scope
- Lexical scope
- Scope chain
- Hoisting
- Temporal Dead Zone
- Call stack
- Objects
- Object properties
- Object methods
- Dot notation
- Bracket notation
- Adding properties
- Deleting properties
- `this`
- Object destructuring
- Object spread
- Optional chaining
- Arrays
- Array indexing
- Array length
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `slice()`
- `splice()`
- `includes()`
- `indexOf()`
- `map()`
- `filter()`
- `find()`
- `some()`
- `every()`
- `reduce()`
- `sort()`
- Array destructuring
- Rest syntax
- Spread syntax
- Closures
- Higher-order functions
- Callback patterns
- First-class functions
- Pure functions
- Side effects
- Immutability basics

---

# 🔥 IMPORTANT

Do not try to memorize all of these methods individually.

Understand the **patterns**.

For example:

```text
map()
   ↓
Transform every item

filter()
   ↓
Keep matching items

find()
   ↓
Find first matching item

some()
   ↓
Does at least one match?

every()
   ↓
Do all match?

reduce()
   ↓
Combine everything into one result
```

If you understand these patterns, you can work with almost any JavaScript array.

---

# 🚀 NEXT — PART 3

The next stage should move into the JavaScript concepts that explain **how JavaScript actually executes code**:

```text
PART 3 — JAVASCRIPT DEEP CORE
        ↓
Execution Context
        ↓
Global Execution Context
        ↓
Function Execution Context
        ↓
Creation Phase
        ↓
Execution Phase
        ↓
Lexical Environment
        ↓
Environment Records
        ↓
Hoisting Deep Dive
        ↓
Temporal Dead Zone
        ↓
Closures Deep Dive
        ↓
`this`
        ↓
call()
        ↓
apply()
        ↓
bind()
        ↓
Prototype Chain
        ↓
Prototype Inheritance
        ↓
Classes
        ↓
Constructor Functions
        ↓
new
        ↓
Object Internals
```

The goal is no longer just:

> **"How do I write JavaScript?"**

The goal becomes:

> **"Why does JavaScript behave this way?"**
