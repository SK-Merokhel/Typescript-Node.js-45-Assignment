"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let testingPhase = ["Zero", "One", "Two", "Three"];
console.log(testingPhase[4]);
/*
testingPhase[4]: This line attempts to access the element at index 4 of the testingPhase array. Since the array only has elements at indices 0, 1, 2, and 3, trying to access index 4 results in undefined. This is because JavaScript does not throw an error for out-of-bounds access; it simply returns undefined.
*/
console.log(testingPhase[0]);
