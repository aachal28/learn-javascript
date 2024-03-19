//primitive

//7 type of data: string, number, boolean, null(empty), undefiened(space), symbol, BigInt

const score =100;
const scoreVal =100.3

const isloggein=true;
const outsidetemp = null // (Completely empty)
let user;//(undefiened)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bignumber = 284664547139436187n


//Reference type / non primitive

// array, objects, functions

const heros = ["shaktiman", "doga"]
let myobj = {
    name:"aachal",
    age: 23,
}

const myfunction= function()
{
    console.log("hello")
}

console.log(typeof bigNumber);

//// https://262.ecma-international.org/5.1/#sec-11.4.3

//************************/

//stack (primitive) copy , heap (non-primitive) reference

let myyoutubename = "codestation"

let anothername = "thecodinggeeks"
console.log(myyoutubename);
console.log(anothername);

let userone ={
    email: "userone",
    upi:"user@ybl"
}
let usertwo = {
    email:"usertwo",
    upi:"two@ybl"
}

console.log(userone)
console.log(usertwo);
