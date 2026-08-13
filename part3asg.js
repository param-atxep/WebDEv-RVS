/* 🏦 Bank Management System

Your system should have:

BankAccount
    ↓
PersonalAccount
BusinessAccount

Requirements:

1. Create a BankAccount class

Properties:

accountHolder
balance
accountNumber
2. Methods
deposit()
withdraw()
getBalance()
3. Private balance

Use:

#balance
4. Getter

Create:

account.balance

that safely returns the balance.

5. Inheritance

Create:

BankAccount
      ↓
SavingsAccount

Savings account should have:

interestRate
calculateInterest()
6. Static method

Create something like:

BankAccount.validateAccountNumber()
7. Error handling

Throw an error when:

withdrawal > balance
deposit <= 0
invalid account number
8. Set

Store unique transaction IDs:

const transactionIds = new Set();
9. Map

Store transactions:

transactionId → transaction information */

// Bank Account
class BankAccount {
    #balance;
    constructor(accountHolder, balance, accountNumber) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
        this.accountNumber = accountNumber;
    }
    // Deposit
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        this.#balance += amount;
        console.log("Amount Deposited Successfully");
    }
    // Withdraw
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient Balance");
        }
        this.#balance -= amount;
        console.log("Amount Withdrawn Successfully");
    }
    // Get balance
    get balance() {
        return this.#balance;
    }
    // Change account holder name
    set name(newName) {
        if (newName.length < 3) {
            throw new Error("Name is too short");
        }
        this.accountHolder = newName;
    }
    // Static method
    static validateAccountNumber(accountNumber) {
        if (accountNumber.length >= 5) {
            return true;
        }
        return false;
    }
}
// Saving Account
class SavingAccount extends BankAccount {
    constructor(accountHolder, balance, accountNumber) {
        super(accountHolder, balance, accountNumber);
        this.interestRate = 7.8;
    }
    // Calculate interest
    calculateInterest() {
        const interest =this.balance * this.interestRate / 100;
        return interest;
    }
}

// Create account
const account = new SavingAccount(
    "Param",
    50000,
    "123456"
);
// Account information
console.log("Name:", account.accountHolder);
console.log("Account Number:", account.accountNumber);
console.log("Balance:", account.balance);
console.log("Interest Rate:", account.interestRate);
// Deposit
try {
    account.deposit(10000);
} catch (error) {
    console.log(error.message);
}
// Withdraw
try {
    account.withdraw(5000);
} catch (error) {
    console.log(error.message);
}
// New balance
console.log("New Balance:", account.balance);
// Calculate interest
console.log("Interest:",account.calculateInterest()
);
// Change name
try {
    account.name = "Param Shelke";
    console.log("New Name:",account.accountHolder);
} catch (error) {
    console.log(error.message);
}
// Validate account number

console.log("Account Number Valid:",BankAccount.validateAccountNumber(account.accountNumber));


// SECOND PROBELM 
/* 
🏨 Problem: Hotel Room Management System

Build a Hotel Room Management System using JavaScript classes.

Your program should manage a hotel room and allow a customer to book, cancel, and check the room.

Requirements

Create a HotelRoom class with:

roomNumber
customerName
private #price
isBooked
Methods

Create:

bookRoom(customerName)

If the room is already booked:

Room is already booked

Otherwise:

Room booked successfully

Create:

cancelBooking()

If the room isn't booked:

Room is not booked

Otherwise cancel the booking.

Create a getter:

price

It should return the room price.

Create a setter:

roomPrice

It should allow changing the price, but don't allow a price less than 500.

Create a static method:

validateRoomNumber(roomNumber)

A room number is valid if it is between 101 and 999.

🏨 Create Another Class

Create:

class LuxuryRoom extends HotelRoom

It should inherit everything from HotelRoom.

Add:

extraCharge

and a method:

getTotalPrice()

which returns:

room price + extra charge
*/ 
class HotelRoom {
    // Private price
    #price = 0;
    constructor(roomNumber, customerName, isBooked, price) {
        this.roomNumber = roomNumber;
        this.customerName = customerName;
        this.isBooked = isBooked;
        this.#price = price;
    }
    // Book room
    bookRoom(customerName) {
        if (this.isBooked) {
            console.log("Room is already booked");
        } else {
            this.isBooked = true;
            this.customerName = customerName;
            console.log("Room booked successfully");
            console.log("Name:", this.customerName);
            console.log("Room Number:", this.roomNumber);
        }
    }
    // Cancel booking
    cancelBooking() {
        if (this.isBooked) {
            console.log(
                "Amount " + this.#price + " Is Refunded In Your Account"
            );
            this.isBooked = false;
            this.customerName = "";
            console.log("Your booking is cancelled");
        } else {
            console.log("Room is not booked");
        }
    }
    // Get price
    get price() {
        return this.#price;
    }
    // Change price
    set price(newPrice) {
        if (newPrice < 500) {
            throw new Error("Price should be greater than 500");
        }
        this.#price = newPrice;
    }
    // Validate room number
    static validateRoomNumber(roomNumber) {
        if (roomNumber >= 101 && roomNumber <= 999) {
            return true;
        }
        return false;
    }
}
// Luxury Room
class LuxuryRoom extends HotelRoom {
    constructor(roomNumber,customerName,isBooked,price,extraCharge) {
        super(roomNumber,customerName,isBooked,price);
        this.extraCharge = extraCharge;
    }
    // Calculate total price
    getTotalPrice() {
        return this.price + this.extraCharge;
    }
}
// Create room
const room = new LuxuryRoom(205,"",false,3000,1000);
// Room information
console.log("Room Number:", room.roomNumber);
console.log("Price:", room.price);
console.log("Extra Charge:", room.extraCharge);
// Book room
room.bookRoom("Param");
// Try booking again
room.bookRoom("Rahul");
// Cancel booking
room.cancelBooking();
// Try cancelling again
room.cancelBooking();
// Change price
try {
    room.price = 3500;
    console.log("New Price:",room.price
    );
} catch (error) {
    console.log(error.message);
}
// Total luxury room price
console.log("Total Luxury Price:",room.getTotalPrice());
// Validate room number
console.log("Room Number Valid:",HotelRoom.validateRoomNumber(room.roomNumber));
