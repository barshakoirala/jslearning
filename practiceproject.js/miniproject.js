// const students = [
//     { name: "Shivam",marks: 70},
//     { name: "Siddharth", marks: 69},
//     { name: "Prashant", marks: 40},
//     { name: "Deshant", marks: 7 },
//     { name: "Yugeen", marks: 77}

// ];

// const passed = students.filter(student => student.marks >= 40 );
// console.log("Passed Students:", passed);

// const passedNames = passed.map( s => s.name);
// console.log("Name of Passed Students:" , passedNames);

// const failed = students.filter(student => student.marks < 40 );
// console.log("Failed Students:", failed.map (s => s.name));


// creating a list of product

const products = [
    { name: "laptop", price: 1200 },
    { name: "Mouse", price: 45},
    { name: "Keyboard", price: 70},
    { name: "Iphone", price: 800},
    { name: "Speaker", price: 150}

]

// show all the products name
const productNames = products.map(p => p.name);
console.log("All Products:", productNames);


// 2. Calculate total cart value
const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log("Total Cart Value: $" + totalPrice);

// 3. (Optional) Show products above $100
const premiumItems = products.filter(p => p.price > 100);
console.log("Premium Products:", premiumItems.map(p => p.name));


const discountedProducts = products.map(p => {
  return {
    name: p.name,
    originalPrice: p.price,
    discountedPrice: p.price - p.price * 0.1 // 10% off
  };
});

console.log("With Discounts:", discountedProducts);


const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
console.log("Sorted Products (Low to High):", sortedProducts.map(p => p.name + " - $" + p.price));





