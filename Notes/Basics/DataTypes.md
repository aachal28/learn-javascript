# JavaScript Data Types 📚

It defines the What kind of data that a variable can hold.

JavaScript supports various data types, which can be classified into primitive and non-primitive types. 
1. Primitive Data Types
- These are the most basic data types in JavaScript.
- They are immutable (cannot be changed).
- They are passed by value.
  
2. NonPrimitive Data Types
- These are more complex data types.
- They are mutable (can be changed).
- They are passed by reference.

Here's an overview: 👇

## Primitive Data Types

| Data Type  | Description                                       | Example           |
|------------|---------------------------------------------------|-------------------|
| Number     | Represents numeric values                        | `let num = 42;`   |
| String     | Represents sequences of characters                | `let str = "Hello";` |
| Boolean    | Represents a logical value (true or false)        | `let bool = true;` |
| Undefined  | Represents a variable that hasn't been assigned a value | `let undef;` |
| Null       | Represents the intentional absence of any value   | `let nul = null;` |

## Non-Primitive Data Types

| Data Type  | Description                                       | Example                         |
|------------|---------------------------------------------------|---------------------------------|
| Object     | Represents a collection of key-value pairs        | `let obj = { key: "value" };`  |
| Function   | A special type of object that is callable         | `function func() {}`           |

## Other Data Types

JavaScript also has other data types, such as `Symbol` and `BigInt`, which are less commonly used in everyday programming tasks.

## Usage of `typeof`

You can use the `typeof` operator to determine the data type of a value or variable:

`Example`

```javascript
let num = 42;
console.log(typeof num); // Output: "number"
```
