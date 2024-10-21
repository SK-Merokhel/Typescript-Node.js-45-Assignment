let famous_person : string = "Al-Ghazali"
let message : string = `${famous_person} once quoted "Knowledge without action is wastefulness and action without knowledge is foolishness." `
console.log(message);

/*
Template Literal: This line uses a template literal (enclosed by backticks `) to create a string that includes the famous_person variable within it.
${famous_person}: This syntax allows you to embed the value of the famous_person variable directly into the string.
Result: The value of famous_person ("Al-Ghazali") is inserted into the string, producing a complete message: "Al-Ghazali once quoted "Knowledge without action is wastefulness and action without knowledge is foolishness."

Summary:
Variables: famous_person holds the name of the famous individual, and message combines that name with a quote.
Template Literals: Used to format and include variables within a string easily.
console.log: Displays the final composed message in the console.
*/
