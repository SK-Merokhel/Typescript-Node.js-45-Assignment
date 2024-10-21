"use strict";
let personName = "Sufyan Khan";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1));
console.log("Tile case:", personName.charAt(1).toUpperCase() + personName.slice(7));
/*
Titlecase Conversion:

personName.charAt(0): This retrieves the first character of the string personName.
Example: For "Sufyan Khan", personName.charAt(0) returns "S".

personName.charAt(0).toUpperCase(): Converts the first character to uppercase.
Example: If the first character is "s", personName.charAt(0).toUpperCase() returns "S".

personName.slice(1): This method extracts the substring from the second character (index 1) to the end of the string.
Example: For "Sufyan Khan", personName.slice(1) returns "ufyan Khan".

Concatenation (+): The + operator is used to concatenate the uppercase first character with the rest of the string.
Example: Combining "S" (uppercase first letter) with "ufyan Khan" results in "Sufyan Khan".
Output: "Titlecase: Sufyan Khan"

Summary:
Lowercase: Converts the entire string to lowercase.
Uppercase: Converts the entire string to uppercase.
Titlecase: Capitalizes only the first character of the string while leaving the rest of the string unchanged.
*/ 
