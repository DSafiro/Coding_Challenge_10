// Task 1: Created Product Class
class Product {
    constructor (name, id, price, stock) {
        this.name = name; // Assigns name property
        this.id = id; // Assigns ID property
        this.price = price; // Assigns price property
        this.stock = stock; // Assigns stock property
    } // Creates constructor for Product class
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; // Returns product details in string format
    } // Method to output product details
    updateStock(quantity) {
        return this.stock -= quantity // Modifies stock level when order is placed
    } // Method that modifies stock level
} // Declares Product class with attributes
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Produces expected output of "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); // Updates stock value by 3
console.log(prod1.getDetails()); // Produces expected output of "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2: Created Order Class
class Order {
    constructor (orderId, product, quantity) {
        this.orderId = orderId; // Assigns order ID property
        this.product = product; // Assigns product property
        this.quantity = quantity; // Assigns quantity property
        this.product.updateStock(this.quantity); // Updates stock when order is created
    }; // Creates constructor for Order class
    getOrderDetails() {
        const totalPrice = this.product.price * this.quantity; // Declares a function that calculates total price
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`; // Returns order details in string format
    }; // Method to output order details
}; // Declares Order class with attributes
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Produces expected output of "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Produces expected output of "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

// Task 3: Created Inventory Class
class Inventory {
    constructor (products) {
        this.products = []; // Assigns products property as an array
    }; // Creates constructor for Inventory class
    addProduct(product) {
        return this.products.push(product); // Adds a product to products array
    }; // Method to add products
    listProducts() {
        return this.products.forEach(product => {console.log(product.getDetails())}); // Returns product details from previous class and logs it
    }; // Method for logging all product details
}; // Declares Inventory class with attributes
const inventory = new Inventory();
inventory.addProduct(prod1); // Adds product to inventory
inventory.listProducts(); // Produces expected output of "Product: Laptop, ID: 101, Price: $1200, Stock: 5"