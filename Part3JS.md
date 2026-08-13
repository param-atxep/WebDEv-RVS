# 🚀 PART 3 — ADVANCED JAVASCRIPT

This part covers some of the most important concepts used in real-world JavaScript development.

---

# 🧬 SECTION A — PROTOTYPES

Prototypes are one of the most important concepts in JavaScript.

Don't worry if they feel strange initially.

---

## 1. What is a Prototype?

Every JavaScript object can have a connection to another object called its **prototype**.

That prototype can provide properties and methods.

For example:

```javascript
const student = {
    name: "Param"
};

console.log(student.toString());
