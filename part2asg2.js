const cart = [
    {
        name: "Laptop",
        price: 60000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1200,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2500,
        quantity: 1
    },
    {
        name: "Headphones",
        price: 3000,
        quantity: 2
    }
];
// Display all products
console.log("=== ITEM  ===");
for(let i = 0 ; i <cart.length;i++){
  console.log(cart[i].name);
}

// Calculate total items
let total = 0;
for(let i = 0; i<cart.length ;i++){
    total += cart[i].quantity;
}
console.log("Total Items : "+total);

// Calculate total price
let totalprice = 0 ;
for(let i = 0 ; i < cart.length ;i++){
   totalprice += cart[i].price * cart[i].quantity;
}
console.log("Total Price : "+totalprice);
const total1 = function calculateCartTotal(cart) {
    let totalprice = 0 ;
    for(let i = 0 ; i < cart.length ;i++){
    totalprice += cart[i].price * cart[i].quantity;
}
  return totalprice;
}
console.log(total1);

// Create a new array containing only product names.
const pname = cart.map(item => item.name);
console.log(pname);

// Find products whose price is greater than 3000.

const gprice = cart.filter(item => item.price > 3000);
console.log(gprice);

//Use find() Find: Keyboard

const kfind = cart.find(item => item.name === 'Keyboard');
console.log(kfind);

// Check whether any product costs more than
const some = cart.some(item => item.price > 50000);
console.log(some);
// Check whether every product has

const quantity = cart.every(item => item.quantity > 0);
console.log(quantity);

//Create a summary object 
const summary = {
  totalIteams : total ,
  TotalPrice : totalprice ,
  expensiveProducts : 0 ,
  hasexpensiveProducts : false,
  allQuantityValid : true
}
console.log(summary);

  
