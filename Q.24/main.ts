// • Tests for equality and inequality with strings

let myAge : any = "25"
let friendAge : number = 25
console.log(myAge == friendAge);
console.log(myAge === friendAge);


// • Tests using the lower case function

let myCar = "Civic"
let friendCar = "V8"
console.log(myCar.toLowerCase() != friendCar);


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let myNumber = 10
let friendNumber = 5
console.log(myNumber == friendNumber);
console.log(myNumber === friendNumber);
console.log(myNumber > friendNumber);
console.log(myNumber < friendNumber);
console.log(myNumber >= friendNumber);
console.log(myNumber <= friendNumber);

// • Tests using "and" and "or" operators

/*
Logical "and" (&&):
This operator returns true only if both conditions are true.
In the example, isMyCompanyHP and isFriendCompanyDell both evaluate to true, so the console.log prints true.

Logical "or" (||):
This operator returns true if at least one of the conditions is true.
In the example, isMyCompanyApple is false, but isFriendCompanyDell is true, so the console.log prints true.
*/

let myCompany = "HP"
let friendCompany = "Dell"
let myResult = myCompany === "HP"
let friendResult = friendCompany === "Dell"
console.log(myResult && friendResult);

let result = myCompany === "Mac"
console.log(result || myCompany === "HP");      

// • Test whether an item is in a array

let goGreen = ["Plant" , "Tree" , "Bushes"]
console.log(goGreen.includes("Tree"));

/*
Use of includes Method:
The includes method is a more straightforward and readable way to check for the presence or absence of an item in an array compared to directly accessing array indices.
Using includes is generally preferred for such tests because it checks for the presence of a specific value directly, without relying on knowing the exact index of the element. Let me know if you have any other questions or need further assistance!
*/

// • Test whether an item is not in a array

let goGreenPlus = ["Plant" , "Tree" , "Bushes"]
console.log(goGreenPlus.includes("Alian"));