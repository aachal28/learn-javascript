// Variable declarations and assignments

const accountId = 12344; // Constant variable
let accountName = "Aachal"; // Variable declared with let
var accountMail = "Aachal@Github.com"; // Variable declared with var
accountCity = "Pune"; // Variable without declaration keyword, defaults to global scope

let accountstate; // Declared but not assigned a value, defaults to undefined

// Trying to reassign a value to a constant variable, which is not allowed
// accountId = 12345677;

// Redefining the variable accountName, which is not allowed
// let accountName = "sam";

// Redefining the variable accountMail
var accountMail = "sam@Github.com";

// Reassigning the value of accountCity
accountCity = "mumbai";

/* prefer not to use var
becuase of issue in block scope and functional scope
That's Why Let come to solve problem of scope block in early days
*/


// Printing values in a table format
console.table([accountId, accountName, accountMail, accountCity, accountstate, accountName, accountMail]);


let Name = "Code Station";
console.log(Name); // Output: Aachal

Name = "Coding With Aachal"; // Reassigning the value of accountName
console.log(Name); // Output: Sam
console.log(accountId);




