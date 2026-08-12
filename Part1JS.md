# 🔥 PART 1 — JAVASCRIPT FOUNDATIONS

Let's start properly.

---

## 1. What actually is JavaScript?

Most beginners hear:

> "JavaScript is a programming language used to make websites interactive."

That's true, but incomplete.

JavaScript is a **high-level, dynamically typed, interpreted/JIT-compiled, multi-paradigm programming language**.

You can use it for:

```text
Browser
   ↓
Frontend
   ↓
React / Next.js

Server
   ↓
Node.js
   ↓
Express / APIs

Desktop
   ↓
Electron

Mobile
   ↓
React Native

Automation
   ↓
Scripts / CLI

Backend
   ↓
Node.js
```

So JavaScript is much bigger than "button click code."

---

# 2. JavaScript vs Java

Very important.

**JavaScript and Java are different languages.**

```text
Java
├── Strongly/statically typed
├── JVM
├── Enterprise applications
└── Object-oriented ecosystem

JavaScript
├── Dynamically typed
├── JS engines
├── Browser + Node.js
├── Functional + OOP
└── Web ecosystem
```

The similar names are mostly historical.

---

# 3. Where does JavaScript run?

This is one of the most important concepts.

JavaScript itself is a language.

Something called a **JavaScript engine** executes it.

Examples:

```text
Chrome
   ↓
V8

Firefox
   ↓
SpiderMonkey

Safari
   ↓
JavaScriptCore

Node.js
   ↓
V8
```

So when you write:

```javascript
console.log("Hello");
```

the browser isn't magically understanding your source code.

A JavaScript engine processes and executes it.

---

# 4. Your first JavaScript program

```javascript
console.log("Hello JavaScript");
```

Output:

```text
Hello JavaScript
```

`console.log()` prints information to the console.

For example:

```javascript
console.log(10);
console.log("Param");
console.log(true);
```

Output:

```text
10
Param
true
```

---

# 5. Comments

JavaScript supports single-line comments:

```javascript
// This is a comment
console.log("Hello");
```

And multiline comments:

```javascript
/*
   This is
   a multiline
   comment
*/
```

Comments aren't executed.

---

# 6. Variables

A variable is a named reference to a value.

Example:

```javascript
let age = 20;
```

Think:

```text
age ───────→ 20
```

Another:

```javascript
let name = "Param";
```

Conceptually:

```text
name ──────→ "Param"
```

---

# 7. `let`

Use `let` when the variable's value may change.

```javascript
let age = 20;

age = 21;

console.log(age);
```

Output:

```text
21
```

---

# 8. `const`

Use `const` when you don't intend to reassign the variable.

```javascript
const country = "India";

console.log(country);
```

This is not allowed:

```javascript
const country = "India";

country = "USA";
```

You'll get an error because the binding cannot be reassigned.

### Professional rule

Prefer:

```javascript
const
```

by default.

Use:

```javascript
let
```

when reassignment is actually necessary.

Avoid using:

```javascript
var
```

in modern JavaScript unless you specifically need to understand legacy code.

---

# 9. `var`

Old JavaScript commonly used:

```javascript
var age = 20;
```

Today:

```javascript
let age = 20;
const name = "Param";
```

are generally preferred.

Why?

Because `let` and `const` have **block scope**, while `var` has function scope and has different hoisting behavior.

We'll study this deeply in Part 2.

---

# 10. JavaScript data types

This is extremely important.

JavaScript has **primitive values** and **objects**.

### Primitive types

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

And:

```text
Object
```

is the major non-primitive category.

---

# 11. String

Text is represented using strings.

```javascript
let name = "Param";
```

You can use:

```javascript
"Hello"
```

or:

```javascript
'Hello'
```

or:

```javascript
`Hello`
```

The backtick version is called a **template literal**.

Example:

```javascript
const name = "Param";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Param and I am 20 years old.
```

This becomes extremely useful later.

---

# 12. Number

JavaScript uses the `number` type for ordinary numeric values.

```javascript
let age = 20;
let price = 999.99;
let temperature = -5;
```

JavaScript also supports special numeric values such as:

```text
Infinity
-Infinity
NaN
```

Example:

```javascript
console.log(10 / 0);
```

Output:

```text
Infinity
```

And:

```javascript
console.log("hello" * 2);
```

Output:

```text
NaN
```

`NaN` means **Not-a-Number**.

Interestingly:

```javascript
typeof NaN
```

returns:

```text
"number"
```

Yes, that's weird.

JavaScript has several historical quirks like this.

We'll understand them instead of memorizing them.

---

# 13. Boolean

Boolean has only two values:

```text
true
false
```

Example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

These become extremely important in conditions.

---

# 14. Undefined

`undefined` generally means a value hasn't been assigned.

Example:

```javascript
let age;

console.log(age);
```

Output:

```text
undefined
```

---

# 15. Null

`null` represents an intentional absence of a value.

Example:

```javascript
let selectedUser = null;
```

You're basically saying:

> There currently isn't a selected user.

This distinction between:

```text
undefined
```

and:

```text
null
```

becomes important in real applications.

---

# 16. BigInt

For integers larger than the safe range of ordinary JavaScript numbers, JavaScript provides `BigInt`.

```javascript
const bigNumber = 123456789012345678901234567890n;
```

Notice the:

```text
n
```

at the end.

---

# 17. Symbol

A `Symbol` creates a unique primitive value.

```javascript
const id = Symbol("id");
```

Even:

```javascript
Symbol("id") === Symbol("id")
```

is:

```text
false
```

because every Symbol is unique.

We'll cover practical uses later.

---

# 18. Checking a type

JavaScript provides:

```javascript
typeof
```

Example:

```javascript
typeof "Hello"
```

returns:

```text
"string"
```

```javascript
typeof 20
```

returns:

```text
"number"
```

```javascript
typeof true
```

returns:

```text
"boolean"
```

```javascript
typeof undefined
```

returns:

```text
"undefined"
```

---

# 19. The famous `typeof null` problem

Try:

```javascript
typeof null
```

You might expect:

```text
"null"
```

But JavaScript returns:

```text
"object"
```

This is a famous historical JavaScript quirk.

Don't worry about why yet.

We'll explain the historical/internal reason when we study JavaScript's type system more deeply.

---

# 20. Operators

JavaScript has many operators.

### Arithmetic

```text
+
-
*
/
%
**
```

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000
```

---

# 21. Assignment operators

```javascript
let x = 10;
```

You can write:

```javascript
x += 5;
```

Equivalent to:

```javascript
x = x + 5;
```

Other examples:

```javascript
x -= 2;
x *= 3;
x /= 2;
x %= 2;
```

---

# 22. Increment and decrement

```javascript
let count = 0;

count++;
```

Now:

```text
1
```

And:

```javascript
count--;
```

Now:

```text
0
```

---

# 23. Comparison operators

```text
>
<
>=
<=
===
!==
```

Example:

```javascript
10 > 5
```

returns:

```text
true
```

And:

```javascript
10 < 5
```

returns:

```text
false
```

---

# 24. `==` vs `===`

This is a **critical JavaScript concept**.

### `==`

Loose equality.

```javascript
5 == "5"
```

returns:

```text
true
```

because JavaScript performs type coercion.

### `===`

Strict equality.

```javascript
5 === "5"
```

returns:

```text
false
```

because:

```text
number !== string
```

### Professional rule

In modern JavaScript:

```javascript
===
```

is generally preferred.

Likewise:

```javascript
!==
```

instead of:

```javascript
!=
```

We'll later go deep into **type coercion**, because it is one of the places where beginner JavaScript becomes confusing.

---

# 25. Logical operators

JavaScript has:

```text
&&
||
!
```

Example:

```javascript
const age = 20;

console.log(age >= 18 && age <= 60);
```

Both conditions need to be true.

`||` means OR:

```javascript
age < 18 || age > 60
```

And `!` means NOT:

```javascript
!true
```

returns:

```text
false
```

---

# 26. Conditions

The most basic conditional:

```javascript
const age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

Output:

```text
Adult
```

---

# 27. `if...else`

```javascript
const age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output:

```text
Minor
```

---

# 28. `else if`

```javascript
const marks = 75;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}
```

---

# 29. Ternary operator

There is a shorter way to express simple conditions.

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";
```

Think:

```text
condition ? ifTrue : ifFalse
```

So:

```javascript
age >= 18 ? "Adult" : "Minor"
```

means:

> If age >= 18, return Adult; otherwise return Minor.

---

# 30. Loops

When you need to repeat something, loops are used.

### `for`

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

Understand the three parts:

```text
for (
    initialization;
    condition;
    update
)
```

In our example:

```text
let i = 0       → initialization
i < 5           → condition
i++             → update
```

---

# 31. `while`

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

---

# 32. `do...while`

This executes the body **at least once**.

```javascript
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

---

# 33. `break`

Stops a loop.

```javascript
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

---

# 34. `continue`

Skips the current iteration.

```javascript
for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
0
1
3
4
```

---

# 🧠 The most important concept from Part 1

Don't just memorize syntax.

Start thinking like this:

```text
JavaScript program
       ↓
Values
       ↓
Variables
       ↓
Expressions
       ↓
Conditions
       ↓
Repetition
       ↓
Functions
       ↓
Objects
       ↓
Asynchronous execution
```

This mental model will make the later parts much easier.

---

# 🎯 PART 1 — QUICK REVISION

By the end of Part 1, you should understand:

- What JavaScript is
- JavaScript vs Java
- JavaScript engines
- Where JavaScript runs
- `console.log()`
- Comments
- Variables
- `let`
- `const`
- `var`
- Primitive data types
- Objects
- Strings
- Numbers
- `NaN`
- `Infinity`
- Booleans
- `undefined`
- `null`
- `BigInt`
- `Symbol`
- `typeof`
- Operators
- Arithmetic operators
- Assignment operators
- Increment/decrement
- Comparison operators
- `==` vs `===`
- Logical operators
- `if`
- `else`
- `else if`
- Ternary operator
- `for`
- `while`
- `do...while`
- `break`
- `continue`

---

# 🚀 NEXT — PART 2

After these foundations, the next major concepts should be:

```text
PART 2 — JAVASCRIPT CORE
        ↓
Scope
        ↓
Hoisting
        ↓
Execution Context
        ↓
Call Stack
        ↓
Functions
        ↓
Function Expressions
        ↓
Arrow Functions
        ↓
Closures
        ↓
`this`
        ↓
Objects
        ↓
Prototypes
        ↓
Classes
```

The goal is not just to **write JavaScript**.

The goal is to understand **how JavaScript actually works**.
