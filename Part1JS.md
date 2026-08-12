🔥 PART 1 — JAVASCRIPT FOUNDATIONS

Let's start properly.

1. What actually is JavaScript?

Most beginners hear:

"JavaScript is a programming language used to make websites interactive."

That's true, but incomplete.

JavaScript is a high-level, dynamically typed, interpreted/JIT-compiled, multi-paradigm programming language.

You can use it for:

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

So JavaScript is much bigger than "button click code."

2. JavaScript vs Java

Very important.

JavaScript and Java are different languages.

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

The similar names are mostly historical.

3. Where does JavaScript run?

This is one of the most important concepts.

JavaScript itself is a language.

Something called a JavaScript engine executes it.

Examples:

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

So when you write:

console.log("Hello");

the browser isn't magically understanding your source code.

A JavaScript engine processes and executes it.

4. Your first JavaScript program
console.log("Hello JavaScript");

Output:

Hello JavaScript

console.log() prints information to the console.

For example:

console.log(10);
console.log("Param");
console.log(true);

Output:

10
Param
true
5. Comments

JavaScript supports single-line comments:

// This is a comment
console.log("Hello");

And multiline comments:

/*
   This is
   a multiline
   comment
*/

Comments aren't executed.

6. Variables

A variable is a named reference to a value.

Example:

let age = 20;

Think:

age ───────→ 20

Another:

let name = "Param";

Conceptually:

name ──────→ "Param"
7. let

Use let when the variable's value may change.

let age = 20;

age = 21;

console.log(age);

Output:

21
8. const

Use const when you don't intend to reassign the variable.

const country = "India";

console.log(country);

This is not allowed:

const country = "India";

country = "USA";

You'll get an error because the binding cannot be reassigned.

Professional rule

Prefer:

const

by default.

Use:

let

when reassignment is actually necessary.

Avoid using:

var

in modern JavaScript unless you specifically need to understand legacy code.

9. var

Old JavaScript commonly used:

var age = 20;

Today:

let age = 20;
const name = "Param";

are generally preferred.

Why?

Because let and const have block scope, while var has function scope and has different hoisting behavior.

We'll study this deeply in Part 2.

10. JavaScript data types

This is extremely important.

JavaScript has primitive values and objects.

Primitive types
String
Number
BigInt
Boolean
Undefined
Null
Symbol

And:

Object

is the major non-primitive category.

11. String

Text is represented using strings.

let name = "Param";

You can use:

"Hello"

or:

'Hello'

or:

`Hello`

The backtick version is called a template literal.

Example:

const name = "Param";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);

Output:

My name is Param and I am 20 years old.

This becomes extremely useful later.

12. Number

JavaScript uses the number type for ordinary numeric values.

let age = 20;
let price = 999.99;
let temperature = -5;

JavaScript also supports special numeric values such as:

Infinity
-Infinity
NaN

Example:

console.log(10 / 0);

Output:

Infinity

And:

console.log("hello" * 2);

Output:

NaN

NaN means Not-a-Number.

Interestingly:

typeof NaN

returns:

"number"

Yes, that's weird.

JavaScript has several historical quirks like this.

We'll understand them instead of memorizing them.

13. Boolean

Boolean has only two values:

true
false

Example:

let isLoggedIn = true;
let isAdmin = false;

These become extremely important in conditions.

14. Undefined

undefined generally means a value hasn't been assigned.

Example:

let age;

console.log(age);

Output:

undefined
15. Null

null represents an intentional absence of a value.

Example:

let selectedUser = null;

You're basically saying:

There currently isn't a selected user.

This distinction between:

undefined

and:

null

becomes important in real applications.

16. BigInt

For integers larger than the safe range of ordinary JavaScript numbers, JavaScript provides BigInt.

const bigNumber = 123456789012345678901234567890n;

Notice the:

n

at the end.

17. Symbol

A Symbol creates a unique primitive value.

const id = Symbol("id");

Even:

Symbol("id") === Symbol("id")

is:

false

because every Symbol is unique.

We'll cover practical uses later.

18. Checking a type

JavaScript provides:

typeof

Example:

typeof "Hello"

returns:

"string"
typeof 20

returns:

"number"
typeof true

returns:

"boolean"
typeof undefined

returns:

"undefined"
19. The famous typeof null problem

Try:

typeof null

You might expect:

"null"

But JavaScript returns:

"object"

This is a famous historical JavaScript quirk.

Don't worry about why yet.

We'll explain the historical/internal reason when we study JavaScript's type system more deeply.

20. Operators

JavaScript has many operators.

Arithmetic
+
-
*
/
%
**

Example:

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
21. Assignment operators
let x = 10;

You can write:

x += 5;

Equivalent to:

x = x + 5;

Other examples:

x -= 2;
x *= 3;
x /= 2;
x %= 2;
22. Increment and decrement
let count = 0;

count++;

Now:

1

And:

count--;

Now:

0
23. Comparison operators
>
<
>=
<=
===
!==

Example:

10 > 5

returns:

true

And:

10 < 5

returns:

false
24. == vs ===

This is a critical JavaScript concept.

==

Loose equality.

5 == "5"

returns:

true

because JavaScript performs type coercion.

===

Strict equality.

5 === "5"

returns:

false

because:

number !== string
Professional rule

In modern JavaScript:

===

is generally preferred.

Likewise:

!==

instead of:

!=

We'll later go deep into type coercion, because it is one of the places where beginner JavaScript becomes confusing.

25. Logical operators

JavaScript has:

&&
||
!

Example:

const age = 20;

console.log(age >= 18 && age <= 60);

Both conditions need to be true.

|| means OR:

age < 18 || age > 60

And ! means NOT:

!true

returns:

false
26. Conditions

The most basic conditional:

const age = 20;

if (age >= 18) {
    console.log("Adult");
}

Output:

Adult
27. if...else
const age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

Output:

Minor
28. else if
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
29. Ternary operator

There is a shorter way to express simple conditions.

const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

Think:

condition ? ifTrue : ifFalse

So:

age >= 18 ? "Adult" : "Minor"

means:

If age >= 18, return Adult; otherwise return Minor.

30. Loops

When you need to repeat something, loops are used.

for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

Output:

0
1
2
3
4

Understand the three parts:

for (
    initialization;
    condition;
    update
)

In our example:

let i = 0       → initialization
i < 5           → condition
i++             → update
31. while
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
32. do...while

This executes the body at least once.

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
33. break

Stops a loop.

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

Output:

0
1
2
3
4
34. continue

Skips the current iteration.

for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}

Output:

0
1
3
4
🧠 The most important concept from Part 1

Don't just memorize syntax.

Start thinking like this:

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

This mental model will make the later parts much easier.
