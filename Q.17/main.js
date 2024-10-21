"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initial invitations
let myGuests = ["Parents", "Siblings", "Teachers"];
myGuests.forEach((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
// The forEach method is used to iterate over each element in the myGuests array.
// For each element, it logs a personalized invitation message to the console.
console.log("\n");
// Informing about a guest who can't attend
console.log(`Due to xyz reason ${myGuests[1]} are not able to attend this dinner`);
console.log("\n");
let anotherGuest = "Friends";
// Adding the new guest to the guest list
myGuests[1] = anotherGuest;
// A new string "Friends" is assigned to the variable anotherGuest.
// The second element in the myGuests array is replaced with anotherGuest.
// Sending the updated invitations
myGuests.forEach((item) => console.log(`Dear ${item}, you are invited to the dinner`));
console.log("\n");
let moreGuests = "Found a bigger dinner table";
console.log(moreGuests);
console.log("\n");
// Add a new guest to the beginning of the array
myGuests.unshift("Grandparents");
// unshift("Grandparents"): Adds "Grandparents" to the beginning of the myGuests array.
// Add a new guest to the middle of the array
myGuests.splice(2, 0, "Mother in law");
// splice(2, 0, "Mother in law"): Inserts "Mother in law" at index 2 without removing any elements.
/*
The splice method in JavaScript is a versatile array method used to add, remove, or replace elements within an array. The method is part of the Array prototype, which means it can be called on any array.
array.splice(start, deleteCount, item1, item2, ..., itemN)
start = 2:

The operation begins at index 2 of the myGuests array.
deleteCount = 0:

No elements are removed from the array because deleteCount is 0.
"Mother in law":

The string "Mother in law" is added to the array at index 2.
Here's how it works step-by-step:

Original Array: Let's assume myGuests is originally ["Parents", "Siblings", "Teachers"].

Operation: splice(2, 0, "Mother in law") starts at index 2, removes 0 elements, and adds "Mother in law".

Resulting Array:

Before: ["Parents", "Siblings", "Teachers"]
After: ["Parents", "Siblings", "Mother in law", "Teachers"]
The splice method effectively shifts the elements at index 2 and beyond one position to the right to make space for "Mother in law".

Key Points to Remember:
splice is a mutable operation, meaning it changes the original array.
It is very flexible and can be used to remove elements, insert new elements, or replace existing elements in the array.
The elements added via splice are inserted starting at the specified index, and if elements are removed, the remaining elements are shifted accordingly to fill the gap.
*/
// Add a new guest to the end of the array
myGuests.push("Mentor");
// push("Mentor"): Appends "Mentor" to the end of the myGuests array.
// Sending the updated invitations
myGuests.forEach((item) => console.log(`Dear ${item}, you are invited to the dinner`));
console.log("\n");
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let changingPlan = "I am able to invite only two people for dinner.";
console.log(changingPlan);
console.log("\n");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner. 
let removeMentor = myGuests.pop();
console.log(`Sorry I am not able to invite ${removeMentor} for this dinner`);
let removeTeachers = myGuests.pop();
console.log(`Sorry I am not able to invite ${removeTeachers} for this dinner`);
let removeFriends = myGuests.pop();
console.log(`Sorry I am not able to invite ${removeFriends} for this dinner`);
let removeGrandParents = myGuests.splice(0, 1);
console.log(`Sorry I am not able to invite ${removeGrandParents} for this dinner`);
/*
Operation: In myGuests.splice(0, 1), the operation begins at index 0 and removes 1 element from the array. This effectively removes the first element of the myGuests array, which, in your case, is "Grandparents".

Return Value: The splice method returns an array containing the element(s) that were removed. Since we removed one element, it returns an array with a single element: ["Grandparents"].
*/
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("\n");
console.log(`Dear,${myGuests[0]} & ${myGuests[1]} you are still invited for the dinner`);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// console.log(`Removing ${myGuests.pop()}`);
// console.log(`Removing ${myGuests.pop()}`);
myGuests.splice(0, 2);
console.log(myGuests);
let lastMessage = "Removed all the guests from the array as here you can see an empty array ===>";
console.log(lastMessage, myGuests);
