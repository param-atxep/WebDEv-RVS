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
