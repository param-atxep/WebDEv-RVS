# 🚀 JavaScript Part 4 — Complete Course

## What Part 4 is about

Part 4 is mainly about two things:

```
```

```
1. JavaScript doing work that takes time
2. JavaScript communicating with the browser/server
```

Real-world examples:

-  Loading products from an API 
-  Login requests 
-  Payment processing 
-  Uploading files 
-  Waiting for a timer 
-  Clicking buttons 
-  Reading form data 
-  Saving user preferences 
-  Updating a webpage without refreshing 

---

# 1. Synchronous JavaScript

Synchronous means:

> JavaScript executes one task at a time, in order.

Example:

```
```

```
console.log("Start");

console.log("Hello");

console.log("End");
```

Output:

```
```

```
Start
Hello
End
```

Think about ordering food:

```
```

```
Order food
    ↓
Wait
    ↓
Receive food
    ↓
Eat
```

The next step waits for the previous step.

---

# 2. Asynchronous JavaScript

Asynchronous means:

> Start a time-consuming operation and allow JavaScript to continue doing other work while waiting for the result.

Example:

```
```

```
console.log("Start");

setTimeout(() => {
    console.log("Food is ready");
}, 3000);

console.log("Continue working");
```

Output:

```
```

```
Start
Continue working
Food is ready
```

Even though `setTimeout()` appears before `"Continue working"`, JavaScript doesn't stop for three seconds.

### Real-life example

Imagine you're at a restaurant.

You order:

```
```

```
Pizza
 ↓
Kitchen prepares it
```

You don't stand inside the kitchen waiting.

You:

```
```

```
Order pizza
   ↓
Sit down
   ↓
Talk to friend
   ↓
Pizza arrives
```

That's the basic idea of asynchronous programming.

---

# 3. `setTimeout()`

`setTimeout()` runs a function after a specified amount of time.

```
```

```
setTimeout(() => {
    console.log("Hello");
}, 2000);
```

`2000` means:

```
```

```
2000 milliseconds
= 2 seconds
```

Real use:

```
```

```
console.log("Payment processing...");

setTimeout(() => {
    console.log("Payment completed");
}, 3000);
```

---

# 4. Callback Functions

A callback is:

> A function passed to another function to be executed later.

Example:

```
```

```
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Param");
}

processUser(greet);
```

Here:

```
```

```
greet
 ↓
passed into processUser
 ↓
callback()
 ↓
greet("Param")
```

### Real-life use

Imagine:

> Call me when the food is ready.

The "call me" function is like a callback.

---

# 5. Callback with `setTimeout`

```
```

```
function orderFood(callback) {

    console.log("Food ordered");

    setTimeout(() => {

        console.log("Food prepared");

        callback();

    }, 2000);
}


function foodReady() {
    console.log("Food is ready");
}


orderFood(foodReady);
```

Output:

```
```

```
Food ordered
Food prepared
Food is ready
```

This pattern was heavily used before Promises became common.

---

# 6. Callback Hell

Suppose you have:

```
```

```
Login
 ↓
Get user
 ↓
Get orders
 ↓
Get payment
 ↓
Generate invoice
```

With callbacks:

```
```

```
login(function () {

    getUser(function () {

        getOrders(function () {

            getPayment(function () {

                generateInvoice(function () {

                    console.log("Done");

                });

            });

        });

    });

});
```

😵 This becomes difficult to read and maintain.

This is called:

# Callback Hell

Promises were introduced to solve problems like this.

---

# 7. Promise

A Promise represents:

> A value that will be available now, later, or never.

Example:

```
```

```
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }

});
```

A Promise has three states:

```
```

```
Pending
   ↓
Fulfilled

OR

Pending
   ↓
Rejected
```

---

# 8. `.then()`

Use `.then()` when the Promise succeeds.

```
```

```
const promise = new Promise((resolve, reject) => {

    resolve("Data received");

});

promise.then((result) => {

    console.log(result);

});
```

Output:

```
```

```
Data received
```

Real use:

```
```

```
loginUser()
    .then((user) => {
        console.log("User logged in:", user);
    });
```

---

# 9. `.catch()`

Use `.catch()` when something fails.

```
```

```
const promise = new Promise((resolve, reject) => {

    reject("Payment failed");

});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

Output:

```
```

```
Payment failed
```

---

# 10. `.finally()`

`finally()` runs whether the operation succeeds or fails.

```
```

```
loginUser()
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Login process finished");
    });
```

Real use:

```
```

```
Show loading
   ↓
Request server
   ↓
Success OR Error
   ↓
Hide loading
```

`finally()` is perfect for the last step.

---

# 11. Promise Chaining

Instead of callback hell:

```
```

```
loginUser()
    .then((user) => {
        return getOrders(user);
    })
    .then((orders) => {
        return getPayment(orders);
    })
    .then((payment) => {
        console.log(payment);
    })
    .catch((error) => {
        console.log(error);
    });
```

Much cleaner.

---

# 12. `async`

`async` makes a function return a Promise.

```
```

```
async function getUser() {

    return "Param";

}
```

Because it's async:

```
```

```
getUser().then((user) => {
    console.log(user);
});
```

---

# 13. `await`

`await` waits for a Promise **inside an async function**.

Example:

```
```

```
function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data received");
        }, 2000);

    });

}


async function showData() {

    console.log("Waiting...");

    const data = await getData();

    console.log(data);

}

showData();
```

Output:

```
```

```
Waiting...
Data received
```

This is much easier to read than Promise chaining.

---

# 14. Error Handling with `async/await`

Use `try/catch`.

```
```

```
async function getData() {

    try {

        const data = await getDataFromServer();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

This is one of the most common patterns you'll use as a developer.

---

# 15. Promise Combinators

Sometimes you have multiple requests.

For example:

```
```

```
Get user
Get products
Get orders
```

You can run them together.

## `Promise.all()`

```
```

```
const user = getUser();
const products = getProducts();
const orders = getOrders();

const result = await Promise.all([
    user,
    products,
    orders
]);
```

It waits for all.

If one fails, the whole `Promise.all()` rejects.

### Real use

A dashboard might need:

```
```

```
User information
Orders
Notifications
Statistics
```

You can request them together.

---

# 16. `Promise.allSettled()`

Unlike `Promise.all()`, it waits for everything even if some requests fail.

```
```

```
const results = await Promise.allSettled([
    getUser(),
    getProducts(),
    getOrders()
]);
```

Useful when:

> I want to know the result of every operation.

---

# 17. `Promise.race()`

Returns whichever Promise finishes first.

```
```

```
const result = await Promise.race([
    server1(),
    server2()
]);
```

Real-world idea:

```
```

```
Server A ──────── 5 sec
Server B ── 2 sec

Winner → Server B
```

---

# 18. `Promise.any()`

Returns the first **successful** Promise.

```
```

```
const result = await Promise.any([
    server1(),
    server2(),
    server3()
]);
```

If the first server fails but the second succeeds, you get the second result.

---

# 19. Event Loop ⭐

This is extremely important.

JavaScript has:

```
```

```
Call Stack
Web APIs
Task Queue
Microtask Queue
Event Loop
```

For example:

```
```

```
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```
```

```
A
C
B
```

Why?

Because `setTimeout()` doesn't immediately execute its callback.

The browser handles the timer and later puts the callback into a queue.

---

# 20. Microtasks vs Macrotasks

Promises use the **microtask queue**.

Timers such as `setTimeout()` use the **task/macrotask queue**.

Example:

```
```

```
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```
```

```
A
D
C
B
```

Why?

```
```

```
Normal JavaScript
      ↓
Microtasks
      ↓
Macrotasks
```

So Promise callbacks generally run before timer callbacks once the current synchronous code finishes.

---

# 21. Fetch API ⭐⭐⭐

Now we get into real development.

`fetch()` is used to make HTTP requests.

Example:

```
```

```
fetch("https://example.com")
```

It returns a Promise.

Basic pattern:

```
```

```
fetch("https://example.com")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

# 22. Fetch with `async/await`

This is what you'll use much more often.

```
```

```
async function getData() {

    try {

        const response =
            await fetch("https://example.com");

        const data =
            await response.text();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getData();
```

---

# 23. JSON

Most APIs return JSON.

Example:

```
```

```
{
    "name": "Param",
    "age": 20,
    "city": "Pune"
}
```

Convert JSON text into JavaScript:

```
```

```
const data = JSON.parse(jsonString);
```

Convert JavaScript object into JSON:

```
```

```
const json = JSON.stringify(user);
```

---

# 24. Fetch JSON API

A typical API request:

```
```

```
async function getUsers() {

    try {

        const response =
            await fetch("https://api.example.com/users");

        const users =
            await response.json();

        console.log(users);

    } catch (error) {

        console.log(error);

    }
}

getUsers();
```

Real applications use this pattern constantly.

---

# 25. HTTP Methods

When communicating with a backend:

| MethodPurpose |              |
| ------------- | ------------ |
| GET           | Get data     |
| POST          | Create data  |
| PUT           | Replace data |
| PATCH         | Update data  |
| DELETE        | Delete data  |

Example:

```
```

```
fetch("/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Param",
        age: 20
    })
});
```

This is directly related to the backend development you'll do with Node.js/Express.

---

# 26. DOM

Now we're moving from JavaScript itself to **browser JavaScript**.

DOM means:

> Document Object Model

The browser converts HTML into objects JavaScript can manipulate.

HTML:

```
```

```
<h1 id="title">Hello</h1>
```

JavaScript:

```
```

```
const title =
    document.querySelector("#title");

title.textContent = "Hello Param";
```

The webpage changes without refreshing.

---

# 27. Selecting Elements

```
```

```
document.getElementById("title");
```

```
```

```
document.querySelector(".box");
```

```
```

```
document.querySelector("#title");
```

```
```

```
document.querySelectorAll(".item");
```

---

# 28. Changing HTML

```
```

```
const title =
    document.querySelector("#title");

title.textContent = "Welcome";
```

You can also change HTML:

```
```

```
title.innerHTML = "<b>Welcome</b>";
```

Be careful with `innerHTML` when handling untrusted user input because it can introduce XSS vulnerabilities.

---

# 29. Changing CSS

```
```

```
const box =
    document.querySelector(".box");

box.style.backgroundColor = "black";
box.style.color = "white";
```

Real use:

```
```

```
User clicks button
      ↓
JavaScript
      ↓
Add/remove CSS
      ↓
Dark mode
```

---

# 30. Creating Elements

```
```

```
const button =
    document.createElement("button");

button.textContent = "Click Me";

document.body.appendChild(button);
```

JavaScript just created a button.

---

# 31. Events ⭐⭐⭐

Events allow JavaScript to react to user actions.

Examples:

```
```

```
click
input
submit
change
keydown
keyup
mouseover
```

Example:

```
```

```
const button =
    document.querySelector("#btn");

button.addEventListener("click", () => {

    console.log("Button clicked");

});
```

Real life:

```
```

```
User clicks Login
       ↓
click event
       ↓
JavaScript
       ↓
Validate form
       ↓
Send request
```

---

# 32. Event Object

```
```

```
button.addEventListener("click", (event) => {

    console.log(event);

});
```

The event object contains information about what happened.

For example:

```
```

```
event.target
```

tells you which element triggered the event.

---

# 33. Event Bubbling

Suppose:

```
```

```
<div id="parent">
    <button id="child">Click</button>
</div>
```

Click the button.

The event can travel:

```
```

```
button
  ↓
div
  ↓
body
  ↓
document
```

That's **event bubbling**.

---

# 34. Event Capturing

Capturing happens in the opposite direction:

```
```

```
document
   ↓
body
   ↓
div
   ↓
button
```

You can enable capturing:

```
```

```
parent.addEventListener(
    "click",
    handler,
    true
);
```

---

# 35. Event Delegation ⭐

Instead of adding an event listener to every button:

```
```

```
container.addEventListener("click", (event) => {

    if (event.target.matches("button")) {

        console.log("Button clicked");

    }

});
```

Useful for dynamic lists.

Example:

```
```

```
100 products
   ↓
1 event listener on container
```

rather than:

```
```

```
100 products
   ↓
100 event listeners
```

---

# 36. Forms

HTML:

```
```

```
<form id="loginForm">

    <input id="email">
    <input id="password">

    <button type="submit">
        Login
    </button>

</form>
```

JavaScript:

```
```

```
const form =
    document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form submitted");

});
```

`preventDefault()` stops the browser's default form submission.

---

# 37. Getting Form Data

```
```

```
const email =
    document.querySelector("#email").value;

const password =
    document.querySelector("#password").value;

console.log(email);
console.log(password);
```

Real use:

```
```

```
User enters email/password
       ↓
JavaScript validates
       ↓
fetch()
       ↓
Backend
```

---

# 38. LocalStorage

`localStorage` stores data in the browser.

```
```

```
localStorage.setItem(
    "username",
    "Param"
);
```

Get it:

```
```

```
const name =
    localStorage.getItem("username");

console.log(name);
```

Remove it:

```
```

```
localStorage.removeItem("username");
```

Clear everything:

```
```

```
localStorage.clear();
```

### Important

LocalStorage stores strings.

So for objects:

```
```

```
const user = {
    name: "Param",
    age: 20
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

Read it:

```
```

```
const user =
    JSON.parse(
        localStorage.getItem("user")
    );

console.log(user.name);
```

---

# 39. SessionStorage

Similar to localStorage:

```
```

```
sessionStorage.setItem(
    "username",
    "Param"
);
```

Difference:

```
```

```
localStorage
     ↓
stays after browser restart

sessionStorage
     ↓
usually lasts for the current tab/session
```

---

# 40. Cookies

Cookies are small pieces of data associated with a website.

JavaScript can access non-HttpOnly cookies through:

```
```

```
document.cookie
```

Example:

```
```

```
document.cookie =
    "username=Param; max-age=3600";
```

Cookies are commonly used for things such as sessions and preferences. For authentication, secure server-managed cookies are generally preferable to putting sensitive tokens in localStorage.

---

# 41. Web APIs

The browser gives JavaScript additional APIs.

Examples:

```
```

```
setTimeout()
fetch()
DOM
localStorage
sessionStorage
Geolocation
Notifications
Clipboard
WebSockets
```

These are **not all part of the JavaScript language itself**.

Think:

```
```

```
JavaScript
     +
Browser APIs
     =
Browser applications
```

---

# 🧩 One Real-Life Project

Now combine what you've learned.

Build a simple:

# 🛒 Product Search App

Imagine an e-commerce website.

Flow:

```
```

```
User opens website
       ↓
Fetch products
       ↓
Show products
       ↓
User searches
       ↓
Filter products
       ↓
User clicks product
       ↓
Show details
       ↓
Add to cart
       ↓
Save cart in localStorage
```

The JavaScript might look conceptually like:

```
```

```
let products = [];

async function loadProducts() {

    try {

        const response =
            await fetch("/api/products");

        products =
            await response.json();

        displayProducts(products);

    } catch (error) {

        console.log("Failed to load products");

    }
}
```

Then:

```
```

```
function displayProducts(products) {

    const container =
        document.querySelector("#products");

    container.innerHTML = "";

    products.forEach((product) => {

        const card =
            document.createElement("div");

        card.textContent = product.name;

        container.appendChild(card);

    });
}
```

Search:

```
```

```
searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase();

    const filtered =
        products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(search)
        );

    displayProducts(filtered);
});
```

Save cart:

```
```

```
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
```

This single project uses:

```
```

```
async/await
fetch
Promises
JSON
DOM
events
array methods
localStorage
try/catch
```

That's why Part 4 is so important.

---

# 🧠 The Part 4 Mental Model

Remember this:

```
```

```
                 JAVASCRIPT
                      │
           ┌───────────┴───────────┐
           │                       │
       Async Work              Browser
           │                       │
      Promises                  DOM
      async/await              Events
      Fetch                    Forms
      Event Loop               Storage
           │                       │
           └───────────┬───────────┘
                      │
                Real Applications
```

## The order I recommend you actually learn it

Don't try to memorize all 41 sections at once.

Study in these blocks:

```
```

```
BLOCK 1
Synchronous
Asynchronous
setTimeout
Callbacks
Callback Hell

        ↓

BLOCK 2
Promises
then
catch
finally
Promise chaining

        ↓

BLOCK 3
async
await
try/catch
Promise.all
Promise.allSettled
Promise.race
Promise.any

        ↓

BLOCK 4
Event Loop
Call Stack
Web APIs
Microtasks
Macrotasks

        ↓

BLOCK 5
Fetch
HTTP
JSON
GET
POST
PUT
PATCH
DELETE

        ↓

BLOCK 6
DOM
Selectors
Changing HTML
Changing CSS
Creating elements

        ↓

BLOCK 7
Events
Event object
Bubbling
Capturing
Delegation

        ↓
```
