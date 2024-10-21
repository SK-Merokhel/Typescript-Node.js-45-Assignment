"use strict";
let personName = "\t\n Sufyan Khan \n\t";
// Print the name with whitespace
console.log("With Whitespace", personName);
/*
\t: Inserts a tab character.
\n: Inserts a newline character.
The string "\t\n Sufyan Khan \n\t" has tabs and newlines surrounding the name "Sufyan Khan".
*/
// Print the name after stripping whitespace
console.log("Without whitespace:", personName.trim());
/*
trim() Method: Removes whitespace from both the beginning and end of the string. This includes spaces, tabs, and newlines.
The output will display the name "Sufyan Khan" without any extra whitespace.
*/ 
