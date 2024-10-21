"use strict";
// let myTransportation: string[] = ["car", "bike", "train", "yacht"];
// console.log(`I would like to upgrade my ${myTransportation[0]} by the end of this year.`);
// console.log(`I bought a GS 150 SE ${myTransportation[1]}.`);
// console.log(`Last year I traveled to Swat via ${myTransportation[2]}.`);
// console.log(`It is my dream to own a ${myTransportation[3]}.`);
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let myTransportation = ["car", "bike", "train", "yacht"];
// Create a single message string by concatenating each message
let message = `I would like to upgrade my ${myTransportation[0]} by the end of this year. ` +
    `I bought a GS 150 SE ${myTransportation[1]}. ` +
    `Last year I traveled to Swat via ${myTransportation[2]}. ` +
    `It is my dream to own a ${myTransportation[3]}.`;
console.log(message);
