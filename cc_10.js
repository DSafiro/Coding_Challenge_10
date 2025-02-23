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