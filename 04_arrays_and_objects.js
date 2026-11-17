/**
 * Lesson 4: Arrays and objects
 * Run with: node practice/04_arrays_and_objects.js
 */

console.log("=== LESSON 04: ARRAYS & OBJECTS ===\n");

const samplePastry = {
    id: "B01",
    name: "Cinnamon Roll",
    price: 1500,
    stock: 6
};

console.log("Pastry Name:", samplePastry.name);
console.log("Pastry Price:", samplePastry.price);

samplePastry.stock -= 2;
console.log("New stock after sale:", samplePastry.stock);


const bakeryMenu = [
    { id: "B01", name: "Croissant", price: 1200, stock: 8 },
    { id: "B02", name: "Baguette",  price: 800,  stock: 15 },
    { id: "B03", name: "Muffin",    price: 1500, stock: 0 },
    { id: "B04", name: "Cookie",    price: 500,  stock: 4 }
];


// Copy the array and each item so changes do not affect the original menu.
function getFreshBakeryMenu() {
    return bakeryMenu.map(item => ({ ...item }));
}

const testBatch = getFreshBakeryMenu();
testBatch[0].stock = 0;
console.log("\nOriginal Croissant stock:", bakeryMenu[0].stock);
console.log("Test batch Croissant stock:", testBatch[0].stock);


console.log("\n--- EXERCISES ---");

function findItemManually(itemsList, targetId) {
    for (const item of itemsList) {
        if (item.id === targetId) {
            return item;
        }
    }

    return null;
}

console.log("\nVerifying Exercise 4.1:");
console.log("Find existing 'B02':", findItemManually(bakeryMenu, "B02")?.name);
console.log("Find nonexistent 'B99':", findItemManually(bakeryMenu, "B99"));
