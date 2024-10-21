"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let number = 5;
let name = "Sufyan";
let languages = ["Spanish", "English", "German"];
let isStudent = true;
// Test 1: Check if number is greater than 3
console.log("Test 1: Is number greater than 3?");
console.log("Prediction: true");
console.log("Result:", number > 3); // true
// Test 2: Check if name is equal to "Sufyan"
console.log("\nTest 2: Is name equal to 'Sufyan'?");
console.log("Prediction: true");
console.log("Result:", name === "Sufyan"); // true
// Test 3: Check if name is not equal to "Raheel"
console.log("\nTest 3: Is name not equal to 'Raheel'?");
console.log("Prediction: true");
console.log("Result:", name !== "Raheel"); // true
// Test 4: Check if languages array contains "German"
console.log("\nTest 4: Does languages array contain 'German'?");
console.log("Prediction: true");
console.log("Result:", languages.includes("German")); // true
// Test 5: Check if languages array contains "French"
console.log("\nTest 5: Does languages array contain 'French'?");
console.log("Prediction: false");
console.log("Result:", languages.includes("French")); // false
// Test 6: Check if isStudent is true
console.log("\nTest 6: Is isStudent true?");
console.log("Prediction: true");
console.log("Result:", isStudent); // true
// Test 7: Check if number is less than or equal to 10
console.log("\nTest 7: Is number less than or equal to 10?");
console.log("Prediction: true");
console.log("Result:", number <= 10); // true
// Test 8: Check if number is between 1 and 10
console.log("\nTest 8: Is number between 1 and 10?");
console.log("Prediction: true");
console.log("Result:", number > 1 && number < 10); // true
// Test 9: Check if name starts with "S"
console.log("\nTest 9: Does name start with 'S'?");
console.log("Prediction: true");
console.log("Result:", name.startsWith("S")); // true
// Test 10: Check if name ends with "n"
console.log("\nTest 10: Does name end with 'n'?");
console.log("Prediction: true");
console.log("Result:", name.endsWith("n")); // true
