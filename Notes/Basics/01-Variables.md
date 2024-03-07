# JavaScript Variables and Scope 📦

## Variables
Variables are used to store and manipulate data in JavaScript. They serve as containers for storing data values.

## Issues with `var`
In early versions of JavaScript, variables declared with `var` had scope issues. They were function-scoped, which sometimes led to unintended behavior, especially in loops and nested functions.

## Introduction of `let` and `const`
To address the scope issues with `var`, `let` and `const` were introduced in ES6 (ECMAScript 2015). `let` and `const` are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) where they are defined.

## Rules for Variable Declaration
- **Use `const`** for variables that won't be reassigned.
- **Use `let`** for variables that need to be reassigned.
- **Avoid using `var`** due to its function scope behavior. Instead, use `let` or `const` for clearer and safer variable declarations.


### Example: Reassigning Variables with `let`
```javascript
let accountName = "Aachal";
console.log(accountName); // Output: Aachal

accountName = "Sam"; // Reassigning the value of accountName
console.log(accountName); // Output: Sam
```

In this example, accountName is initially assigned the value "Aachal". Later in the code, the value of accountName is changed to "Sam" using the same variable name and the let keyword, indicating that it can be reassigned.
