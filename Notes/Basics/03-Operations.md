# JavaScript Operations and Conversion Rules 📊

JavaScript provides various operations for performing calculations and manipulating data, along with rules for converting between different data types.

## Conversion Rules

| From       | To         | Conversion                  | Example                            |
|------------|------------|-----------------------------|------------------------------------|
| String     | Number     | Use `Number()` function     | `let valueInNumber = Number(score);` |
| Number     | String     | Use `String()` function     | `let stringNumber = String(someNumber);` |
| String     | Boolean    | Use `Boolean()` function    | `let booleanIsLoggedIn = Boolean(isLoggedIn);` |
| Number     | Boolean    | Non-zero numbers convert to `true`, zero converts to `false` | `let isLoggedIn = "hitesh"; let booleanIsLoggedIn = Boolean(isLoggedIn);` |

## Operations

| Operator   | Description                    | Example                      | Result  |
|------------|--------------------------------|------------------------------|---------|
| `+`        | Addition                       | `2 + 2`                      | `4`     |
| `-`        | Subtraction                    | `5 - 3`                      | `2`     |
| `*`        | Multiplication                 | `4 * 3`                      | `12`    |
| `/`        | Division                       | `10 / 2`                     | `5`     |
| `**`       | Exponentiation                 | `2 ** 3`                     | `8`     |
| `%`        | Modulus (Remainder)            | `10 % 3`                     | `1`     |
| `++`       | Increment                      | `let gameCounter = 100; ++gameCounter;` | `101`   |
| `--`       | Decrement                      | `let Counter = 100; Counter++;`       | `101`   |

Avoid complex conversions for clarity and readability. These operations and conversion rules are fundamental in JavaScript for manipulating data and performing calculations.

### Unary Plus and Minus
- Unary Plus (+): Converts values to numbers.
- Unary Minus (-): Negates values.

### Increment and Decrement Operators
- Prefix Increment (++i): Increments the value before using it.
- Postfix Increment (i++): Uses the value before incrementing it.

## Example: Type Conversion and Operations
```javascript
let score = "hitesh";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // Output: "number"
console.log(valueInNumber);        // Output: NaN (not a number)

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);    // Output: true

let num1 = 1;
let num2 = 2;
let result = num1++ + ++num2;      // Equivalent to (1 + 3)
console.log(result);                // Output: 4

```
