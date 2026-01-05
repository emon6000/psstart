const cart =[
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Shirt", price: 50, category: "Clothing"},
    {name: "Book", price: 20, category: "Books"},
    {name: "Phone", price: 800, category: "Electronics"},
    {name: "Pants", price: 60, category: "Clothing"},
];
const productNames = cart.map(item =>item.name);
console.log(productNames);
const productCategories = cart.map(item =>item.category);
console.log(productCategories);

const discountedCart = cart.map(item => {
    let discount = 0;
    if(item.category === "Electronics"){
        discount = 0.1;
    }else if(item.category === "Clothing"){
        discount = 0.05;
    }else if(item.category === "Books"){
        discount = 0.02;
    }
    const discountedPrice = item.price * (1 - discount);
    return {...item, discountedPrice: discountedPrice.toFixed(2)};
});
console.log(discountedCart);

const expensiveitem = cart.filter(item=> item.price>500);
console.log(expensiveitem);

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(`Total Price: $ ${totalPrice}`);

const newitem = {name: "Headphones", price: 150, category: "Electronics"};
const updatedcart = [...cart, newitem];
console.log(updatedcart);

const removeitemname = "Shirt";
const filteredcart = cart.filter(item => item.name !== removeitemname);
console.log(filteredcart);

const clothingitems = cart.filter(item => item.category === "Clothing");
console.log(clothingitems);

const totalClothingPrice = clothingitems.reduce((total, item) => total + item.price, 0);
console.log(`Total Clothing Price: $ ${totalClothingPrice}`);




// Example array of product ratings

const ratings = [4, -1, 3, 5, -2, 4.5, 0];

// The "Chain":
// 1. Filter: Keep ratings > 0
// 2. Map: Multiply each by 10 (e.g., 4 becomes 40)
// 3. Reduce: Sum them up to get the total
const finalScore = ratings
    .filter(r => r > 0)
    .map(r => r * 10)
    .reduce((sum, r) => sum + r, 0);

console.log("Processed Score:", finalScore);