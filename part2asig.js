/* 🏦 Mini Banking System

Create:

const account = {
    accountHolder: "Param",
    balance: 50000,
    isActive: true,
    transactions: [5000, -2000, 10000, -3000, 1500]
};

Your program should:

Create a function to deposit money.
Create a function to withdraw money.
Prevent withdrawal if balance isn't sufficient.
Calculate the total transaction amount using reduce().
Create a new array containing only deposits using filter().
Create a new array where every transaction has a 10% processing adjustment using map().
Find the first transaction greater than 5000 using find().
Check whether any transaction is negative using some().
Check whether every transaction is below 20000 using every().
Use object destructuring.
Use array destructuring.
Use the spread operator.
Create a getBalance() function.
Create a closure-based private balance system.
Use this in an object method.
Demonstrate a callback function.
Use a default function parameter.
Use rest parameters.
*/
 const account = {
    accountHolder: "Param",
    balance: 50000,
    isActive: true,
    transactions: [5000, -2000, 10000, -3000, 1500],

    showBalance() {
        console.log(`Current Balance: ₹${this.balance}`);
    }
};


// ========================================
// 1. DEPOSIT FUNCTION
// ========================================

function deposit(amount) {
    account.balance += amount;

    // Add transaction
    account.transactions.push(amount);

    console.log(`Deposited Successfully: ₹${amount}`);
}


// ========================================
// 2. WITHDRAW FUNCTION
// ========================================

function withdraw(amount) {

    if (amount <= account.balance) {

        account.balance -= amount;

        // Negative transaction represents withdrawal
        account.transactions.push(-amount);

        console.log(`Withdrawn Successfully: ₹${amount}`);

    } else {

        console.log("Insufficient Balance");
    }
}


// ========================================
// 3. PERFORM TRANSACTIONS
// ========================================

deposit(15000);

withdraw(5260);


// ========================================
// 4. OBJECT METHOD + this
// ========================================

account.showBalance();


// ========================================
// 5. REDUCE()
// Calculate total transaction amount
// ========================================

const totalTransaction = account.transactions.reduce(
    (sum, transaction) => sum + transaction,
    0
);

console.log(
    `Total Transaction Amount: ₹${totalTransaction}`
);


// ========================================
// 6. FILTER()
// Get only deposits
// ========================================

const deposits = account.transactions.filter(
    transaction => transaction > 0
);

console.log("Deposits:", deposits);


// ========================================
// 7. FILTER()
// Get only withdrawals
// ========================================

const withdrawals = account.transactions.filter(
    transaction => transaction < 0
);

console.log("Withdrawals:", withdrawals);


// ========================================
// 8. MAP()
// Add 10% processing adjustment
// ========================================

const adjustedTransactions = account.transactions.map(
    transaction => transaction * 1.10
);

console.log(
    "Transactions after 10% adjustment:",
    adjustedTransactions
);


// ========================================
// 9. FIND()
// Find first transaction greater than 5000
// ========================================

const largeTransaction = account.transactions.find(
    transaction => transaction > 5000
);

console.log(
    "First transaction greater than ₹5000:",
    largeTransaction
);


// ========================================
// 10. SOME()
// Check if ANY transaction is negative
// ========================================

const hasWithdrawal = account.transactions.some(
    transaction => transaction < 0
);

console.log(
    "Has withdrawal:",
    hasWithdrawal
);


// ========================================
// 11. EVERY()
// Check whether every transaction
// is below 20000
// ========================================

const allBelowLimit = account.transactions.every(
    transaction => transaction < 20000
);

console.log(
    "Every transaction below ₹20000:",
    allBelowLimit
);


// ========================================
// 12. OBJECT DESTRUCTURING
// ========================================

const {
    accountHolder,
    balance,
    isActive
} = account;

console.log("Account Holder:", accountHolder);
console.log("Balance:", balance);
console.log("Active:", isActive);


// ========================================
// 13. ARRAY DESTRUCTURING
// ========================================

const [
    firstTransaction,
    secondTransaction,
    thirdTransaction
] = account.transactions;

console.log("First Transaction:", firstTransaction);
console.log("Second Transaction:", secondTransaction);
console.log("Third Transaction:", thirdTransaction);


// ========================================
// 14. SPREAD OPERATOR
// ========================================

const copiedTransactions = [...account.transactions];

console.log(
    "Copied Transactions:",
    copiedTransactions
);


// ========================================
// 15. DEFAULT PARAMETER
// ========================================

function checkBalance(message = "Current account balance") {

    console.log(
        `${message}: ₹${account.balance}`
    );
}

checkBalance();


// ========================================
// 16. REST PARAMETER
// ========================================

function calculateTotal(...amounts) {

    return amounts.reduce(
        (sum, amount) => sum + amount,
        0
    );
}

const extraTransactions = calculateTotal(
    1000,
    2000,
    3000
);

console.log(
    "Extra Transactions Total:",
    extraTransactions
);


// ========================================
// 17. CALLBACK FUNCTION
// ========================================

function processAccount(callback) {

    console.log("Processing account...");

    callback();
}

processAccount(() => {
    console.log("Account processing completed.");
});


// ========================================
// 18. CLOSURE
// Private balance
// ========================================

function createBankAccount(initialBalance) {

    let privateBalance = initialBalance;

    function getBalance() {
        return privateBalance;
    }

    function depositMoney(amount) {
        privateBalance += amount;
    }

    function withdrawMoney(amount) {

        if (amount <= privateBalance) {

            privateBalance -= amount;

        } else {

            console.log("Private Account: Insufficient Balance");
        }
    }

    return {
        getBalance,
        depositMoney,
        withdrawMoney
    };
}


// Create private account

const privateAccount = createBankAccount(10000);

console.log(
    "Private Account Balance:",
    privateAccount.getBalance()
);

privateAccount.depositMoney(5000);

console.log(
    "After Deposit:",
    privateAccount.getBalance()
);

privateAccount.withdrawMoney(2000);

console.log(
    "After Withdrawal:",
    privateAccount.getBalance()
);
