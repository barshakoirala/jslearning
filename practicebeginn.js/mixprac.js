// 1 variables 
// let fullName = "Barsha Koirala ";

// console.log("my name is " , fullName);


// 2

// let a = 10;
// let b = 5;

//     console.log("sum is",a + b);

//     console.log("difference is ", a - b);

//     console.log("product is" , a * b);

//     console.log("division is" , a/b);


// 3

// let isNepali = true ;

// console.log(typeof isNepali);


// 4

// let undefinedVar ;

// console.log(undefinedVar);


//  5

// let person = {
//     name: "Barsha",
//     age: "24",
//     favouritecolor: "blue",
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.favouritecolor);


// 6 condtions and operators

// let num = 10;

// if (num % 2 == 0 ){
//     console.log ("even");
// } else {
//     console.log("odd");
// }


//  7

// let num = 100;

// if (num > 0){
//     console.log("positive");
// }else if (num < 0 )
// {
//     console.log("negative");
// } 
// else
//  {
//     console.log("zero");
// }


//  8
// let age = 25;

// if (age > 18){
//     console.log("is eligible to vote");
// } else {
//     console.log("is not eligible to vote");
// }


//  9

// let num = 28 ;

// if (num /5 == 0){
//     console.log( "is divisible by", 5 );
// } else {
//     console.log("is not divisible by" ,5);
// }


// 10 

// let a = 25;
// let b = 40;

// if (a > b){
// console.log("a is greater than b");

// } else (b < a); {
//     console.log("b  greater than a");
// } 


// 11

// let result1 = "5" == 5;
// let result2 = "5" === 5;

// console.log(result1);
// console.log(result2);

//  12

// let marks = 35;

// let result = marks >= 40 ? "pass" : "fail;"

// console.log(result);

// loop and arrays


// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }



// .map

// let numbers = [1 ,2, 3];

// let doubled = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubled);


// let salaries = [30000 ,35000, 40000];

// let updateSalaries =  salaries.map(function(salary){
//     return salary + 1000;
// });

// console.log(updateSalaries);


// let animals = ["dog" ,"horse", "giraffe", "lion"];

// let lengths = animals.map(function(animal){
//     return animal.length
// });

// console.log(lengths);


// let items = ["pen", "book","eraser"];

// let labeled =  items.map(function(data, index){
//     return `${index + 1}. ${data}`;
// });

// console.log(labeled);


// let food = ["pizza" ,"momo", "Burger"];

// let result = food.map(function(item){
//     return item + "is tasty";

// });

// console.log(result);

// let people = [
//     { name : "barsha", age : 25 },
//     { name : "rita", age : 26 },
//     { name : "gita", age : 30 },
// ];

// let names = people.map(function(person){
//     return person.name;
// });

// console.log(names);


// const result = array.filter((Element,index) => {
//     return condition;
// });

// const numbers = [1,2,3,4,5]
// const evenNumbers = numbers.filter(num=> num % 2 === 0);
// console.log(evenNumbers);

// const students = [
//     {Name: "ram", marks: 40},
//     {name: "sita", marks: 75},
//     {name: "hari", marks: 30},
// ];

// const passed = students.filter(student => student.marks >= 40);
// console.log(passed);


// const names = ["ram","sita","gopal","anjali","raj"];
// const longNames = names.filter(name => name.length > 4);
// console.log(longNames);


// const products = [
//     {name: "Shampoo", inStock: true },
//     {name: "Soap", inStock: false},
//     {name: "lotion", inStock: true },
// ];

// const available = products.filter(item => item.inStock);
// console.log(available);


// const prices = [150, 80, 200 ,50, 99];
// const cheapcPrices = prices.filter(price => price <100);
// console.log(cheapPrices);

// const students = [
//     {name: "Asha", marks:35 },
//     {name: "Binod", marks:60 },
//     {name: "Chirag", marks: 25 },
// ];

// const failed = students.filter(s => s.marks < 40 );
// console.log(failed);


// const result = Array.reduce((accululator, currentValue) => {
//     return something;
// }, initialValue);


const nums = [1,2,3,4,5,6];
const countEven = nums.reduce((acc, num) => {
    if (num % 2 === 0) acc++;
    return acc;
}, 0);

console.log(countEven);
