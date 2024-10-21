"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let countries = ["USA", "Saudi Arabia", "Finland", "Turkey", "Switzerland"];
// • Print your array in its original order.
console.log("My country list:", countries);
// • Print your array in alphabetical order without modifying the actual list.
console.log("My country list in alphabetical order", countries.slice().sort());
/*
countries.slice(): This creates a shallow copy of the countries array. The slice() method returns a new array containing a portion (or all) of the elements from the original array.
.sort(): This method sorts the array in place. By using it on the copy of the array, the original array remains unchanged.
By including the parentheses after sort, you ensure the function is called and the sorted array is returned and printed. If you omit the parentheses (as in countries.slice().sort), you'll be referencing the sort function itself, rather than the result of sorting the array.
*/
// • Show that your array is still in its original order by printing it.
console.log("My original country list sequence:", countries);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("My country list in reverse alphabetical order", countries.slice().sort().reverse());
/*
slice(): Creates a copy of the original array.
sort(): Sorts the copied array in alphabetical order.
reverse(): Reverses the sorted array to achieve reverse alphabetical order.
*/
// • Show that your array is still in its original order by printing it again.
console.log("My original country list sequence:", countries);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("My list of countries in reverse format", countries.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order:", countries.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical Order", countries.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical Order", countries.sort().reverse());
