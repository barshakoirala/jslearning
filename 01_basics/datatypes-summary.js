const score = 100 
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


//const bigNumber = 45637891234n

console.log(typeof bigNumber);

//these are  primitive datatypes 


const heros = ["chris", "theo", "cillian"] // Arrays

let myObj ={
    name: "Barsha",
    age: 24,
}      // objects

const myFunction = function(){
    console.log("Hello world");
}  //function


// these are reference type (non primitive datatypes)


// stack(used in primitive datatypes )heap(used in reference /non primitive datatypes)
let myYoutubename ="midnightrain"

let anothername = myYoutubename 
anothername = "dressesandcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "theojames3@google.com",
    phonenumber: 76890412
}

let userTwo = userOne

userTwo.email = "jamestheo6@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);