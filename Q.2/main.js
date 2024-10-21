"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstMessage = "Hello Sufyan, would you like to learn some TypeScript today?";
console.log(firstMessage);
/*
Explanation:

String Literal: The message is stored directly as a complete string, "Hello Sufyan, would you like to learn some TypeScript today?".

No Interpolation: Since the entire message is a static string, there is no need for interpolation or variable substitution. The variable message holds the entire message text.

Usage: This approach is simple and straightforward when the message does not need to be dynamic or involve any variable content
*/
let secondMessage = "Raheel";
console.log(`Hello ${secondMessage}, would you like to learn some TypeScript today?`);
/*
Explanation:

String Interpolation: This snippet uses a template literal (backticks `) to create the message string. Template literals allow for the embedding of expressions, using ${expression} syntax, within the string.

Variable Substitution: The variable message contains only the name, "Raheel", and is substituted into the larger string "Hello ${message}, would you like to learn some TypeScript today?". This makes the message dynamic, allowing you to easily change the name without altering the rest of the string.

Flexibility: This method is more flexible if you want to personalize the message for different names or values, as you only need to change the value of message.
*/ 
