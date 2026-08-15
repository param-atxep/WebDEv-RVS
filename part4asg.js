/* 
🟢 PROBLEM 1 — Food Order Processing System
Difficulty: ⭐⭐

Build a food-order system that teaches you the fundamentals of asynchronous JavaScript.

Create:

placeOrder()

The function should simulate:

Place Order
    ↓
Restaurant accepts order
    ↓
Food preparation
    ↓
Delivery partner assigned
    ↓
Order delivered

Use:

setTimeout()
Callback functions
Promises
.then()
.catch()
.finally()
async/await
Requirements

Create:

placeOrder(order)

The order should contain:

{
    customerName: "Param",
    item: "Pizza",
    price: 499
}

Simulate each stage with delays.

For example:

Order placed
Restaurant accepted
Preparing food
Delivery partner assigned
Delivered

If something goes wrong, reject the Promise.

Must practice
Synchronous vs asynchronous
Callbacks
Promises
Promise states
then()
catch()
finally()
async
await
try/catch
setTimeout
 */
const order = {
    customerName: "Param",
    item: "Pizza",
    price: 499
};

function placeOrder(order) {
    console.log("Order Placed Successfully");
    console.log("Name :- " + order.customerName);
    console.log("Item :- " + order.item);
    console.log("Price :- " + order.price);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const restaurantAccepted = true;

            if (restaurantAccepted) {
                resolve("Restaurant accepted");
            } else {
                reject("Restaurant did not accept the order");
            }
        }, 1000);
    });
}

function start(order) {
    placeOrder(order)
        .then((restaurant) => {
            console.log(restaurant);

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Food is preparing");
                }, 1500);
            });
        })
        .then((food) => {
            console.log(food);

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Delivery partner assigned");
                }, 1000);
            });
        })
        .then((delivery) => {
            console.log(delivery);

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Order delivered");
                }, 1500);
            });
        })
        .then((delivered) => {
            console.log(delivered);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Order processing completed");
        });
}

start(order);
