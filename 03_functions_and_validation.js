/**
 * Lesson 3: Functions and input validation
 * Run with: node practice/03_functions_and_validation.js
 */

console.log("=== LESSON 03: FUNCTIONS & INPUT VALIDATION ===\n");

// A function can take parameters and return a value to its caller.
function greetCustomer(name, isMorning) {
    if (isMorning) {
        return `Good morning, ${name}! Welcome to the bakery.`;
    }
    return `Hello, ${name}! Welcome to the bakery.`;
}

const greeting = greetCustomer("Aline", true);
console.log(greeting);


// Return null when the distance or rate is invalid.
function calculateDeliveryCharge(distanceKm, ratePerKm) {
    if (typeof distanceKm !== "number" || typeof ratePerKm !== "number") {
        return null;
    }

    if (!Number.isInteger(distanceKm) || !Number.isInteger(ratePerKm)) {
        return null;
    }

    if (distanceKm <= 0 || ratePerKm < 0) {
        return null;
    }

    return distanceKm * ratePerKm;
}

console.log("\nTesting calculateDeliveryCharge:");
console.log("Valid: 5 km at 200 RWF per km      ->", calculateDeliveryCharge(5, 200));   // 1000
console.log("Invalid string: '5' at 200 RWF     ->", calculateDeliveryCharge("5", 200)); // null
console.log("Invalid decimal: 2.5 km at 200 RWF ->", calculateDeliveryCharge(2.5, 200)); // null
console.log("Invalid negative: -3 km at 200 RWF ->", calculateDeliveryCharge(-3, 200));  // null


console.log("\n--- EXERCISES ---");

function calculateBakeryTotal(quantity, itemPrice) {
    if (typeof quantity !== "number" || typeof itemPrice !== "number") {
        return null;
    }

    if (!Number.isInteger(quantity) || !Number.isInteger(itemPrice)) {
        return null;
    }

    if (quantity <= 0 || itemPrice < 0) {
        return null;
    }

    return quantity * itemPrice;
}


console.log("\nVerifying Exercise 3.1:");
console.log("Normal case: 3 items at 1200 RWF (Expected: 3600)  ->", calculateBakeryTotal(3, 1200));
console.log("Zero price: 2 free items at 0 RWF (Expected: 0)     ->", calculateBakeryTotal(2, 0));
console.log("Zero quantity: 0 items at 500 RWF (Expected: null)  ->", calculateBakeryTotal(0, 500));
console.log("Decimal quantity: 1.5 at 500 RWF (Expected: null)   ->", calculateBakeryTotal(1.5, 500));
console.log("String input: '3' at 500 RWF (Expected: null)       ->", calculateBakeryTotal("3", 500));
console.log("Negative price: 2 at -500 RWF (Expected: null)     ->", calculateBakeryTotal(2, -500));
