const accountId=12344
let accountName="Aachal"
var accountMail="Aachal@Github.com"

accountCity ="Pune"; // u can declare variable without type

let accountstate; // print undefined (not assigned value)

// accountId =12345677; // not allowed bcz const type

accountName="sam" 
var accountMail="sam@Github.com"
accountCity ="mumbai";


/* prefer not to use var
becuase of issue in block scope and functional scope
That's Why Let come to solve problem of scope block in early days
*/

console.log(accountId);
console.table([accountId, accountName, accountMail,accountCity, accountstate, accountName, accountMail])