// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner

let myGUests : string [] = ["Parents" , "Siblings" , "Teachers"]
myGUests.forEach((items) => (console.log(`Dear ${items}, you are invited to the dinner`)))

/*
myGuests.forEach: This is a method call on the myGuests array. The .forEach() method iterates over each element in the array and executes the provided function for each element.

(items) =>: This is an arrow function, which is a concise way to write functions in JavaScript and TypeScript.

items: This is a parameter of the arrow function that represents each element in the myGuests array during iteration. In each iteration, items will take the value of the current element.
console.log(Dear ${items}, you are invited to the dinner): This is the body of the arrow function. It logs a personalized message to the console for each element in the array.

`Dear ${items}, you are invited to the dinner`: This is a template literal, a string format that allows embedding expressions inside ${}. The items variable is inserted into the string, resulting in personalized messages like "Dear Parents, you are invited to the dinner."
*/

/*
Use .forEach() when you need to perform an action for each element without needing a new array of results.

Use .map() when you want to transform elements and need to create and use a new array with those transformed elements.

In your case, since you're primarily logging messages and not storing or using a transformed array, .forEach() is more appropriate.
*/


// let myGUests : string [] = ["Parents" , "Siblings" , "Teachers"]
// console.log(`I would like you to invite my ${myGUests[0]} for dinner`);
// console.log(`I would like you to invite my ${myGUests[1]} for dinner`);
// console.log(`I would like you to invite my ${myGUests[2]} for dinner`);
