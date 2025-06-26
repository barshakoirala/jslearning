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
  { name: "Laptop", price: 1200, quantity: 2 },
  { name: "Keyboard", price: 70, quantity: 1 },
  { name: "iPhone", price: 800, quantity: 2 },
  { name: "Speaker", price: 150, quantity: 2 },
  { name: "Charger", price: 25, quantity: 3 }
];

function displayCart(cart) {
  cart.forEach(p => {
    const itemTotal = p.price * p.quantity;
    console.log(`${p.name} - $${p.price} x ${p.quantity} = $${itemTotal}`);
  });
}

function getTotal(cart) {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  console.log("Total Cart Value: $" + total);
}

// Show cart and total
displayCart(products);
getTotal(products);

function updateQuantity(cart, productName, newQuantity) {
  const item = cart.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (item) {
    item.quantity = newQuantity;
    console.log(`${item.name} quantity updated to ${newQuantity}`);
  } else {
    console.log("Product not found in cart");
  }
}

updateQuantity(products, "Charger", 5);

displayCart(products);
getTotal(products);
