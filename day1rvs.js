/*
Build a Student Result & Eligibility System

Imagine you're building a small part of a college management system.

Your program receives a student's information and marks, then determines:

Student information
Total marks
Percentage
Pass/fail status
Grade
Whether the student is eligible for the next semester
Whether the student gets a scholarship
A small performance report
*/

const studentName = "Rahul";
const age = 20;
const city = "Pune";
const isStudent = true;

const math = 82;
const physics = 74;
const programming = 91;
const database = 68;
const english = 77;

console.log("== STUDENT INFO ==");
console.log("Name  :"+studentName);
console.log("Age   :"+age);
console.log("City  :"+city);
const totalMark = math+physics+programming+database+english ;
const percentage = (totalMark/500)*100
console.log("Total Marks :"+totalMark);
console.log("Percentage  :"+percentage);
if( math < 40 || physics < 40 || programming < 40 || database < 40 || english < 40){
  console.log("Fail");
}else{
  console.log("Pass");
}
if(percentage > 90 ){
  console.log("Grade : A ");
} else if(percentage > 80 ){
  console.log("Grade : B ");
}else if(percentage > 70 ){
  console.log("Grade : C ");
}else if(percentage > 60 ){
  console.log("Grade : D ");
}else {
  console.log("Grade  : F ");
}
