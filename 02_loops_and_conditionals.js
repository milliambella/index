/**
 * Lesson 2: Loops and conditionals
 * Run with: node practice/02_loops_and_conditionals.js
 */

console.log("=== LESSON 02: LOOPS & CONDITIONALS ===\n");

const bakeryItems = [
    { id: "B01", name: "Croissant", price: 1200, stock: 8 },
    { id: "B02", name: "Baguette",  price: 800,  stock: 15 },
    { id: "B03", name: "Muffin",    price: 1500, stock: 0 },   // Out of stock
    { id: "B04", name: "Cookie",    price: 500,  stock: 4 }
];

// List each product and its stock.
for (const item of bakeryItems) {
    console.log(`- ${item.name}: ${item.price} RWF (Stock: ${item.stock})`);
}

console.log("\nChecking stock levels:");
for (const item of bakeryItems) {
    if (item.stock === 0) {
        console.log(` ${item.name} is OUT OF STOCK!`);
    } else if (item.stock < 5) {
        console.log(` ${item.name} is LOW ON STOCK (${item.stock} left).`);
    } else {
        console.log(` ${item.name} has healthy stock (${item.stock} left).`);
    }
}


// Add the stock from all products.
let totalUnitsInStore = 0;

for (const item of bakeryItems) {
    totalUnitsInStore += item.stock;
}

console.log("\nTotal units of baked goods in store:", totalUnitsInStore);

console.log("\n--- EXERCISES ---");

// Calculate the value of all products currently in stock.
let totalInventoryValue = 0;

for (const item of bakeryItems) {
    totalInventoryValue += item.price * item.stock;
}

console.log("Total inventory value:", totalInventoryValue, "RWF");

// Count products priced above 1000 RWF.
let expensiveItemsCount = 0;

for (const item of bakeryItems) {
    if (item.price > 1000) {
        expensiveItemsCount++;
    }
}

console.log("Products priced above 1000 RWF:", expensiveItemsCount);
