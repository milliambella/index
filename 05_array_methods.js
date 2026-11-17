/**
 * Lesson 5: Array methods
 * Run with: node practice/05_array_methods.js
 */

console.log("=== LESSON 05: ARRAY METHODS (find, filter, reduce) ===\n");

const bakeryMenu = [
    { id: "B01", name: "Croissant", price: 1200, stock: 8 },
    { id: "B02", name: "Baguette",  price: 800,  stock: 15 },
    { id: "B03", name: "Muffin",    price: 1500, stock: 0 },
    { id: "B04", name: "Cookie",    price: 500,  stock: 4 }
];

// find() returns the first matching item, or undefined if there is no match.
const foundBaguette = bakeryMenu.find(item => item.id === "B02");
console.log("Found item B02:", foundBaguette.name);

const missingItem = bakeryMenu.find(item => item.id === "B99");
console.log("Missing item B99 is:", missingItem);


// filter() returns a new array containing the matching items.
const availableItems = bakeryMenu.filter(item => item.stock > 0);
console.log("\nItems currently in stock:", availableItems.map(i => i.name));


// reduce() adds each item's value to the running total.
const totalInventoryValue = bakeryMenu.reduce((sum, item) => {
    return sum + (item.price * item.stock);
}, 0);

console.log("\nTotal inventory value with reduce:", totalInventoryValue, "RWF");


console.log("\n--- EXERCISES ---");

function findPastry(menu, pastryId) {
    return menu.find(item => item.id === pastryId) ?? null;
}

function calculateTotalValue(menu) {
    return menu.reduce((total, item) => total + item.price * item.stock, 0);
}

function getLowStockPastries(menu, threshold) {
    return menu.filter(item => item.stock < threshold);
}


console.log("\nVerifying Exercise 5.1 (find):");
console.log("Search 'B01':", findPastry(bakeryMenu, "B01")?.name);
console.log("Search 'B99':", findPastry(bakeryMenu, "B99"));

console.log("\nVerifying Exercise 5.2 (total value):");
console.log("Bakery total:", calculateTotalValue(bakeryMenu));
console.log("Empty list:", calculateTotalValue([]));

console.log("\nVerifying Exercise 5.3 (filter):");
console.log("Stock below 5:",
    getLowStockPastries(bakeryMenu, 5)?.map(p => p.name));
console.log("Empty list:", getLowStockPastries([], 5));
