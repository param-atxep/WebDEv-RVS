/* 
🏧 ATM Transaction System
Situation

You are building a simple ATM system.

Create a program that stores:

const accountHolder = "Param";
const accountNumber = "123456";
let balance = 50000;
const isActive = true;

The user wants to withdraw money.

Use:

const withdrawAmount = 12000;
Your program must:
Display account information.
Check whether the account is active.
Check whether the withdrawal amount is greater than 0.
Check whether the user has enough balance.
If everything is valid:
Deduct the amount.
Display the withdrawn amount.
Display the remaining balance.
If balance is insufficient:
Display "Insufficient Balance".
Determine account status:
balance >= 40000 → Excellent Balance
balance >= 20000 → Good Balance
balance >= 5000  → Low Balance
otherwise        → Critical Balance
Use a loop to display:
Transaction 1
Transaction 2
Transaction 3
*/
const accountHolder = "Param";
const accountNumber = "123456";
let balance = 50000;
const isActive = true;
const withdrawAmount = 12000;
// Display Information
console.log("----ACCOUNT INFO----");
console.log("Name : "+accountHolder);
console.log("Acc No : "+accountNumber);
console.log("Status : "+isActive);
console.log("Balance : "+balance);
// Check Active Or Not
if(isActive){
  console.log("Account Is Active");
}else{
  console.log("Account Is InActive");
}
// Check Withdrawl Amount Is Grate Than 0
if(withdrawAmount > 0){
  console.log("Amount Is grater Than Zero");
} else{
  console.log("Amount is Less Than Zero");
}
// Check User Enough Balance
if(balance > withdrawAmount){
  console.log("Have Enough Balance");
}else{
  console.log("Not Have Enough Balance");
}
// Withdrawal Process
if(withdrawAmount <= balance){
  balance -= withdrawAmount;
  console.log("SuccessFully Withrawal Of INR. "+withdrawAmount);
  console.log("Remaining balance Is : "+balance);
}else{
  console.log("Insufficient Balance");
}
// Determine account status
if(balance >= 40000){
  console.log("Excellent Balance");
}else if(balance>=20000){
  console.log("Good Balance");
}else if(balance >= 5000){
  console.log("low Balance");
}else{
  console.log("Critical Balance")
}
// loop to display
for(let i = 1 ; i <= 3 ; i++){
  console.log("Transaction "+i);
}
