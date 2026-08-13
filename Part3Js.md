# PART 3 — SECTION A

# 🧬 PROTOTYPES

This is one of the **most important concepts in JavaScript**.

Don't worry if it feels strange initially.

---

# 1. What is a Prototype?

Every JavaScript object can have a connection to another object called its **prototype**.

That prototype can provide properties and methods.

For example:

```
```

```
const student = {
    name: "Param"
};

console.log(student.toString());
```

You never created:

```
```

```
toString()
```

inside `student`.

So where did it come from?

JavaScript looks through the object's **prototype chain**.

Conceptually:

```
```

```
student
   ↓
Object.prototype
   ↓
null
```

`toString()` exists on `Object.prototype`.

---

# 2. Why Do Prototypes Exist?

Imagine you have 10,000 users.

You could theoretically give every object its own copy of the same function:

```
```

```
const user1 = {
    name: "Param",
    login() {
        console.log("Login");
    }
};

const user2 = {
    name: "Rahul",
    login() {
        console.log("Login");
    }
};
```

That's unnecessary duplication.

Instead, JavaScript can share methods through prototypes.

```
```

```
User objects
     ↓
User.prototype
     ↓
shared methods
```

This is useful for:

-  memory efficiency 
-  object-oriented programming 
-  classes 
-  inheritance 
-  built-in JavaScript objects 

---

# 3. Prototype Chain

Consider:

```
```

```
const user = {
    name: "Param"
};

console.log(user.toString());
```

JavaScript basically searches:

```
```

```
Does user have toString?
        ↓
      NO
        ↓
Does user prototype have toString?
        ↓
      NO
        ↓
Does Object.prototype have toString?
        ↓
      YES
        ↓
Execute it
```

This search is called the:

# Prototype Chain

---

# 4. Seeing the Prototype

You can inspect it:

```
```

```
const user = {
    name: "Param"
};

console.log(Object.getPrototypeOf(user));
```

You can also check:

```
```

```
console.log(
    Object.getPrototypeOf(user) === Object.prototype
);
```

Output:

```
```

```
true
```

---

# 5. Where Are Prototypes Used?

You use prototypes **every day**, even when you don't realize it.

For example:

```
```

```
const name = "Param";

console.log(name.toUpperCase());
console.log(name.includes("a"));
console.log(name.length);
```

Methods like:

```
```

```
toUpperCase()
includes()
```

come from the string object's prototype mechanisms.

Similarly:

```
```

```
const numbers = [10, 20, 30];

numbers.push(40);
numbers.map(...);
numbers.filter(...);
```

These methods are provided through:

```
```

```
Array.prototype
```

So:

```
```

```
Array
  ↓
Array.prototype
  ↓
push()
map()
filter()
find()
...
```

---

# 6. Constructor Functions

Before modern JavaScript classes became common, developers often used **constructor functions**.

Example:

```
```

```
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

Now:

```
```

```
const user1 = new User("Param", 20);
const user2 = new User("Rahul", 21);

console.log(user1);
console.log(user2);
```

You get:

```
```

```
User {
    name: "Param",
    age: 20
}

User {
    name: "Rahul",
    age: 21
}
```

---

# 7. What Does `new` Do?

This is extremely important.

When you write:

```
```

```
const user = new User("Param", 20);
```

JavaScript roughly does these things:

```
```

```
1. Create a new object
        ↓
2. Connect it to User.prototype
        ↓
3. Set `this` to the new object
        ↓
4. Execute User()
        ↓
5. Return the object
```

So:

```
```

```
new User()
```

is doing much more than simply calling a function.

---

# 8. Adding a Prototype Method

Instead of creating a method for every user:

```
```

```
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name}`);
};
```

Now:

```
```

```
const user1 = new User("Param", 20);
const user2 = new User("Rahul", 21);

user1.sayHello();
user2.sayHello();
```

Both objects share the same method.

Conceptually:

```
```

```
user1 ─────┐
           ↓
     User.prototype
           ↑
user2 ─────┘
```

### Where is this useful?

When you have many objects that need the same behavior:

-  users 
-  products 
-  bank accounts 
-  vehicles 
-  employees 
-  game characters 

---

# 9. Classes

Modern JavaScript gives us a cleaner syntax:

```
```

```
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}
```

Create objects:

```
```

```
const user1 = new User("Param", 20);
const user2 = new User("Rahul", 21);

user1.sayHello();
user2.sayHello();
```

---

# ⚠️ Important

Classes did **not** replace prototypes internally.

JavaScript classes are built on top of the prototype system.

Conceptually:

```
```

```
class User
     ↓
User.prototype
     ↓
shared methods
```

This is why understanding prototypes is important even if you mostly use classes.

---

# 10. Inheritance

Suppose we have:

```
```

```
Person
  ↓
Student
```

A student is a person, but has additional behavior.

```
```

```
class Person {

    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}
```

Now:

```
```

```
class Student extends Person {

    study() {
        console.log(`${this.name} is studying`);
    }
}
```

Create:

```
```

```
const student = new Student("Param");

student.introduce();
student.study();
```

Output:

```
```

```
My name is Param
Param is studying
```

The student gets `introduce()` from `Person`.

---

# 11. `super`

Suppose the parent has a constructor:

```
```

```
class Person {

    constructor(name) {
        this.name = name;
    }
}
```

Child:

```
```

```
class Student extends Person {

    constructor(name, course) {
        super(name);
        this.course = course;
    }
}
```

`super(name)` calls the parent constructor.

Now:

```
```

```
const student = new Student(
    "Param",
    "Information Technology"
);

console.log(student.name);
console.log(student.course);
```

---

# 12. Encapsulation

Encapsulation means:

> Keep an object's internal data controlled rather than allowing everything to be changed directly.

Example:

```
```

```
class BankAccount {

    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}
```

Use:

```
```

```
const account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());
```

But:

```
```

```
console.log(account.#balance);
```

❌ Error.

The balance is private.

---

# 13. Why Encapsulation Is Useful

Imagine a banking application.

You don't want someone doing:

```
```

```
account.balance = -999999;
```

Instead:

```
```

```
account.deposit(5000);
account.withdraw(1000);
```

The object controls how its internal state changes.

This is extremely useful in:

-  banking 
-  authentication 
-  payment systems 
-  business logic 
-  large applications 

---

# 14. Getters

A getter lets you access a method like a property.

```
```

```
class User {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

Now:

```
```

```
const user = new User("Param", "Shelke");

console.log(user.fullName);
```

Notice:

```
```

```
user.fullName
```

not:

```
```

```
user.fullName()
```

---

# 15. Setters

A setter controls how a value is changed.

```
```

```
class User {

    constructor(name) {
        this.name = name;
    }

    set username(value) {

        if (value.length < 3) {
            console.log("Username too short");
            return;
        }

        this.name = value;
    }
}
```

Use:

```
```

```
const user = new User("Param");

user.username = "PS";
```

The setter can validate the value.

---

# 16. Static Methods

Sometimes a method belongs to the **class itself**, not individual objects.

```
```

```
class MathHelper {

    static add(a, b) {
        return a + b;
    }
}
```

Call:

```
```

```
console.log(MathHelper.add(10, 20));
```

You don't need:

```
```

```
const math = new MathHelper();
```

### Where useful?

Static methods are commonly used for:

-  utility functions 
-  factories 
-  validation 
-  helper logic 

---

# 17. Private Fields

Modern JavaScript supports private fields using `#`.

```
```

```
class User {

    #password;

    constructor(password) {
        this.#password = password;
    }

    checkPassword(password) {
        return this.#password === password;
    }
}
```

Use:

```
```

```
const user = new User("12345");

console.log(
    user.checkPassword("12345")
);
```

You cannot directly access:

```
```

```
user.#password;
```

---

# 🧠 SECTION A — What You Should Understand

At this point you should understand:

```
```

```
Object
   ↓
Prototype
   ↓
Prototype chain
   ↓
Constructor function
   ↓
new
   ↓
Class
   ↓
Inheritance
   ↓
Encapsulation
   ↓
Getters / Setters
   ↓
Private fields
```

---

# PART 3 — SECTION B

# 📦 MODULES

Now we move to something you'll use constantly in real applications.

Imagine your project has:

```
```

```
project/
│
├── user.js
├── payment.js
├── database.js
└── app.js
```

You don't want everything in one giant file.

Modules allow you to split your code.

---

# 18. Export

`math.js`

```
```

```
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

---

# 19. Import

`app.js`

```
```

```
import { add, subtract } from "./math.js";

console.log(add(10, 20));
console.log(subtract(20, 5));
```

This gives you:

```
```

```
math.js
   ↓
exports functions
   ↓
app.js
   ↓
imports functions
```

### Where used?

Every serious frontend application.

For example:

```
```

```
components/
services/
utils/
hooks/
api/
database/
```

Each can have separate modules.

---

# 20. Named Export

```
```

```
export function login() {
    // ...
}

export function logout() {
    // ...
}
```

Import:

```
```

```
import { login, logout } from "./auth.js";
```

---

# 21. Default Export

```
```

```
export default function login() {
    // ...
}
```

Import:

```
```

```
import login from "./auth.js";
```

Notice the difference:

```
```

```
Named:
import { login }

Default:
import login
```

---

# 22. CommonJS

Node.js applications historically used CommonJS heavily.

`math.js`

```
```

```
function add(a, b) {
    return a + b;
}

module.exports = {
    add
};
```

Then:

```
```

```
const { add } = require("./math");
```

You'll still encounter this in existing Node.js projects.

Modern Node.js also supports ES Modules.

---

# PART 3 — SECTION C

# 🛑 ERROR HANDLING

Real applications fail sometimes.

For example:

```
```

```
const user = null;

console.log(user.name);
```

This produces an error.

Instead of letting your application crash unexpectedly, we can handle errors.

---

# 23. `try` / `catch`

```
```

```
try {

    const user = null;

    console.log(user.name);

} catch (error) {

    console.log("Something went wrong");
}
```

The risky code goes inside:

```
```

```
try
```

If it fails:

```
```

```
catch
```

runs.

---

# 24. Why Use Error Handling?

Imagine:

```
```

```
User
 ↓
Frontend
 ↓
API
 ↓
Database
```

The database might fail.

The network might fail.

The API might return invalid data.

Your application needs to handle those situations.

---

# 25. `finally`

`finally` runs whether an error occurs or not.

```
```

```
try {

    console.log("Trying");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Finished");
}
```

Useful for cleanup:

```
```

```
open connection
     ↓
perform operation
     ↓
finally
     ↓
close connection
```

---

# 26. `throw`

You can create your own error:

```
```

```
function withdraw(balance, amount) {

    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}
```

Then:

```
```

```
try {

    withdraw(5000, 10000);

} catch (error) {

    console.log(error.message);
}
```

---

# 27. Custom Error

You can create your own error class:

```
```

```
class InsufficientBalanceError extends Error {

    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}
```

Use:

```
```

```
throw new InsufficientBalanceError(
    "Not enough money"
);
```

Useful in larger applications where different errors need different handling.

---

# PART 3 — SECTION D

# 🔄 ITERATORS

Now we enter a deeper JavaScript concept.

An **iterator** is an object that allows you to retrieve values one at a time.

For example:

```
```

```
const numbers = [10, 20, 30];
```

An array is iterable.

You can do:

```
```

```
for (const number of numbers) {
    console.log(number);
}
```

JavaScript uses the iterable protocol behind the scenes.

---

# 28. Iterator

You can manually create one:

```
```

```
const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Output conceptually:

```
```

```
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
```

The iterator gives you one value at a time.

---

# 29. Where Are Iterators Used?

They power things like:

```
```

```
for...of
```

and work with:

```
```

```
Array
String
Set
Map
Generators
```

This is one of the mechanisms behind JavaScript's iteration system.

---

# 30. Generators

A generator is a special function that can pause and resume.

Syntax:

```
```

```
function* numbers() {

    yield 10;
    yield 20;
    yield 30;
}
```

Use:

```
```

```
const generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

---

# 31. `yield`

`yield` pauses the generator.

```
```

```
function* numbers() {

    yield 10;

    console.log("Middle");

    yield 20;

    console.log("End");

    yield 30;
}
```

Each `.next()` continues execution until the next `yield`.

### Where useful?

Generators can be useful for:

-  custom iterators 
-  lazy data processing 
-  sequences 
-  advanced state machines 
-  streaming-style processing 

They're less common in everyday application code, but important to understand.

---

# PART 3 — SECTION E

# 🗃️ SET

A `Set` stores **unique values**.

```
```

```
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);
```

Output:

```
```

```
Set { 10, 20 }
```

The duplicate `10` is removed.

---

# 32. Practical Set Example

Suppose:

```
```

```
const skills = [
    "JavaScript",
    "React",
    "JavaScript",
    "Node.js",
    "React"
];
```

Remove duplicates:

```
```

```
const uniqueSkills = [...new Set(skills)];

console.log(uniqueSkills);
```

Result:

```
```

```
[
    "JavaScript",
    "React",
    "Node.js"
]
```

This is a very practical use.

---

# 33. Map

A `Map` stores key-value pairs.

```
```

```
const users = new Map();

users.set(1, "Param");
users.set(2, "Rahul");
users.set(3, "Amit");
```

Get:

```
```

```
console.log(users.get(1));
```

Output:

```
```

```
Param
```

Check:

```
```

```
console.log(users.has(2));
```

---

# 34. Map vs Object

Both can store key-value data.

Object:

```
```

```
const user = {
    name: "Param",
    age: 20
};
```

Map:

```
```

```
const user = new Map();

user.set("name", "Param");
user.set("age", 20);
```

### General rule

Use an **Object** when you're representing an entity:

```
```

```
User
Product
Order
Student
```

Use a **Map** when you need a collection of key-value relationships.

For example:

```
```

```
user ID → user data
product ID → product data
```

---

# 35. WeakMap

`WeakMap` stores key-value pairs where keys must be objects.

```
```

```
const weakMap = new WeakMap();

const user = {};

weakMap.set(user, "Private data");

console.log(weakMap.get(user));
```

Why "weak"?

Because the garbage collector can remove the object when nothing else references it.

This can be useful for:

-  private metadata 
-  object-associated data 
-  memory-sensitive systems 

---

# 36. WeakSet

Similar idea, but it stores objects instead of key-value pairs.

```
```

```
const weakSet = new WeakSet();

const user = {};

weakSet.add(user);

console.log(weakSet.has(user));
```

---

# PART 3 — SECTION F

# 🧠 MEMORY

This section is extremely important for becoming a strong JavaScript developer.

---

# 37. Stack vs Heap

Simplified model:

```
```

```
STACK
────────────
small/simple values
function calls
references
────────────

HEAP
────────────
objects
arrays
functions
larger dynamic data
────────────
```

Example:

```
```

```
let age = 20;

const user = {
    name: "Param"
};
```

The exact engine implementation is more complicated than this model, but this mental model is useful for understanding references and memory behavior.

---

# 38. Reference Values

Consider:

```
```

```
const user1 = {
    name: "Param"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
```

Output:

```
```

```
Rahul
```

Why?

Because both variables refer to the same object.

```
```

```
user1 ─────┐
           ↓
        OBJECT
           ↑
user2 ─────┘
```

This is one of the most important JavaScript behaviors to understand.

---

# 39. Copying Objects

This does **not** create an independent object:

```
```

```
const user2 = user1;
```

Instead, use:

```
```

```
const user2 = { ...user1 };
```

Now:

```
```

```
user1 → Object A

user2 → Object B
```

---

# 40. Shallow Copy

Spread creates a shallow copy.

```
```

```
const user1 = {
    name: "Param",
    address: {
        city: "Pune"
    }
};

const user2 = { ...user1 };
```

The top-level object is different.

But:

```
```

```
user1.address
```

and:

```
```

```
user2.address
```

still refer to the same nested object.

---

# 41. Deep Copy

For modern JavaScript, one option is:

```
```

```
const user2 = structuredClone(user1);
```

Now nested objects are cloned as well.

```
```

```
user2.address.city = "Mumbai";

console.log(user1.address.city);
```

Still:

```
```

```
Pune
```

---

# 42. Immutability

Immutability means:

> Instead of changing existing data directly, create new data.

Instead of:

```
```

```
user.name = "Rahul";
```

you might do:

```
```

```
const updatedUser = {
    ...user,
    name: "Rahul"
};
```

This concept becomes **extremely important in React**.

For example:

```
```

```
const updatedUsers = users.map(user => {
    if (user.id === 1) {
        return {
            ...user,
            name: "Rahul"
        };
    }

    return user;
});
```

Instead of modifying the original array.

---

# 43. Garbage Collection

JavaScript automatically manages memory.

Example:

```
```

```
let user = {
    name: "Param"
};

user = null;
```

If nothing else references the original object, it becomes eligible for garbage collection.

Conceptually:

```
```

```
Object
  ↑
user

user = null

Object
  ↑
nothing

      ↓
Garbage Collector
      ↓
Memory can be reclaimed
```

You don't manually call something like:

```
```

```
free(object)
```

as you might in some lower-level languages.

---

# 🎯 PART 3 — WHAT YOU ACTUALLY NEED TO MASTER

Don't try to memorize every syntax.

You should be able to explain these concepts:

### Prototypes

```
```

```
Object
 ↓
prototype
 ↓
prototype chain
```

### Classes

```
```

```
class User {
    constructor(name) {
        this.name = name;
    }
}
```

### Inheritance

```
```

```
class Student extends User {
}
```

### Encapsulation

```
```

```
#privateData
```

### Modules

```
```

```
export
import
```

### Errors

```
```

```
try
catch
finally
throw
```

### Iterators

```
```

```
iterator.next()
```

### Generators

```
```

```
function* test() {
    yield 10;
}
```

### Set

```
```

```
new Set()
```

### Map

```
```

```
new Map()
```

### Memory/reference

```
```

```
const b = a;
```

doesn't copy an object.

### Shallow copy

```
```

```
const b = { ...a };
```

### Deep copy

```
```

```
const b = structuredClone(a);
```

### Immutability

```
```

```
const updated = {
    ...oldObject,
    name: "New Name"
};
```
