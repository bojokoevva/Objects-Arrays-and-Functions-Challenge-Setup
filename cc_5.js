// Task 1: Customer Profile

// Creating an object to represent a customer with some basic details 
const customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };
 console.log(`Name: ${customer.name}`);
 console.log(`Age: ${customer.age}`);
 console.log(`Email: ${customer.email}`);

// Task 2: Order Details 
// Creating an object to represent an order with basic details
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",

// Method to display the order details using 'this' to access properties
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
    }
};

// Calling the method to log the order details
order.displayOrder();


// Task 3: Shopping Cart
// Starting with a list of items in the shopping cart
let cartItems = ["Apples", "Bananas", "Oranges"];

// Adding a new item to the end of the cart
cartItems.push("Grapes");
// Removing the last item from the cart
cartItems.pop();
// Adding a new item to the beginning of the cart
cartItems.unshift("Mangoes");
// Removing the first item from the cart
cartItems.shift();

console.log(cartItems);


// Task 4: Price Adjustments 
// Array of original product prices
let prices = [100, 200, 300];

// Applying a 10% discount to each price using the .map() method
let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);


//Task 5: Product Availability 
// Array of product quantities in inventory
let inventory = [5, 0, 12, 8, 0];

// Filtering out products with zero stock using .filter()
let availableProducts = inventory.filter(quantity => quantity > 0);

console.log(availableProducts);


//Task 6: Revenue Calculation
// Array representing sales amounts
let sales = [500, 300, 200, 400];

// Using .reduce() to calculate the total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

console.log(`Total Revenue: $${totalRevenue}`);

//Task 7: Customer Search
// Array of customer names
let customers = ["Alice", "Bob", "Charlie", "David"];

// Finding the customer named "Charlie" using .find()
let foundCustomer = customers.find(customer => customer === "Charlie");

console.log(`Found Customer: ${foundCustomer}`);

//Task 8: Tax Calculation
// Function to calculate tax based on an amount and tax rate
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Calculated Tax: $${tax}`); // Showing the calculated tax
    return tax; // Returning the tax amount
}

// Testing the function with an example
calculateTax(1000, 0.07);


//Task 9: Discount Application
// Function expression to calculate the price after applying a discount
const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`); // Displaying the final price
    return discountedPrice; // Returning the discounted price
};

// Testing the function with an example
applyDiscount(500, 0.1);


//Task 10: Loyalty Points
// Arrow function to calculate loyalty points based on the purchase amount
const calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10); // 1 point for every $10 spent
    console.log(`Loyalty Points: ${points}`); // Showing the calculated points
    return points; // Returning the points
};

// Testing the function with an example
calculatePoints(250);