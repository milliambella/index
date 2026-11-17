/**
 * Lesson 1: Variables and JavaScript types
 * Run with: node practice/01_variables.js
 */

console.log("=== LESSON 01: VARIABLES & DATA TYPES ===\n");

// Use let when a variable needs to be reassigned.
let dailyRevenue = 0;
console.log("Starting daily revenue:", dailyRevenue);

dailyRevenue += 1200;
console.log("Revenue after first sale:", dailyRevenue);

// Use const when the variable itself should not be reassigned.
const BAKERY_NAME = "Sweet Crust Bakery";
console.log("Welcome to:", BAKERY_NAME);

// A const object can still have its properties changed.
const bakeryItem = {
    id: "B01",
    name: "Croissant",
    price: 1200,
    stock: 10
};

bakeryItem.stock = 8;
console.log("\nUpdated item stock:", bakeryItem);

// Basic type checks
console.log("\nType checks:");
console.log("typeof 500:", typeof 500);
console.log("typeof '500':", typeof "500");
console.log("typeof true:", typeof true);
console.log("Array.isArray([]):", Array.isArray([]));

console.log("\n--- EXERCISES ---");

