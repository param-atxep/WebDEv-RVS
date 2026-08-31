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
// Student Result System

// Student details
const studentName = "Rahul";
const age = 20;
const city = "Pune";
const isStudent = true;
// Marks
const math = 82;
const physics = 74;
const programming = 91;
const database = 68;
const english = 77;
// Calculate total and percentage
const totalMarks =
    math + physics + programming + database + english;
const percentage = (totalMarks / 500) * 100;
// Student information
console.log("================================");
console.log("       STUDENT RESULT");
console.log("================================");
console.log("Name       :", studentName);
console.log("Age        :", age);
console.log("City       :", city);
console.log("Student    :", isStudent);
// Total and percentage
console.log("Total Marks:", totalMarks);
console.log("Percentage :", percentage + "%");

// Check pass or fail
let status;

if (
    math < 40 ||
    physics < 40 ||
    programming < 40 ||
    database < 40 ||
    english < 40
) {
    status = "FAIL";
} else {
    status = "PASS";
}

console.log("Status     :", status);

// Calculate grade
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Grade      :", grade);

// Check scholarship
let scholarship;

if (
    percentage >= 85 &&
    math >= 60 &&
    physics >= 60 &&
    programming >= 60 &&
    database >= 60 &&
    english >= 60
) {
    scholarship = "Eligible";
} else {
    scholarship = "Not Eligible";
}

console.log("Scholarship:", scholarship);

// Check next semester eligibility
let nextSemester;

if (
    isStudent === true &&
    age >= 18 &&
    status === "PASS"
) {
    nextSemester = "Eligible";
} else {
    nextSemester = "Not Eligible";
}

console.log("Next Semester:", nextSemester);

// Check performance
let performance;

if (percentage >= 90) {
    performance = "Outstanding";
} else if (percentage >= 80) {
    performance = "Excellent";
} else if (percentage >= 70) {
    performance = "Good";
} else if (percentage >= 60) {
    performance = "Average";
} else {
    performance = "Needs Improvement";
}

console.log("Performance:", performance);

// Final result
console.log("================================");
console.log("        FINAL RESULT");
console.log("================================");

console.log("Student       :", studentName);
console.log("Total Marks   :", totalMarks);
console.log("Percentage    :", percentage + "%");
console.log("Status        :", status);
console.log("Grade         :", grade);
console.log("Scholarship   :", scholarship);
console.log("Performance   :", performance);
console.log("Next Semester :", nextSemester);

console.log("================================");
