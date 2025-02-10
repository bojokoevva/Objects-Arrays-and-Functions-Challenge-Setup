// Task 1: Customer Profile

// Creating an object to represent a customer with some basic details
const customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };

// Logging each property of the customer object

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