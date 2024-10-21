"use strict";
let myGuests = ["Parents", "Siblings", "Teachers"];
myGuests.forEach((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
console.log("\n");
// Informing about a guest who can't attend
console.log(`Due to xyz reason ${myGuests[1]} are not able to attend this dinner`);
console.log("\n");
let anotherGuest = "Friends";
// Adding the new guest to the guest list
myGuests[1] = anotherGuest;
// Sending the updated invitations
myGuests.forEach((item) => console.log(`Dear ${item}, you are invited to the dinner`));
