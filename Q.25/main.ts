// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color = "Green"

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if (alien_color === "Green") {
    console.log("Earned 5 points for the shot!!!");
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (alien_color === "Black") {
    console.log("Earned 5 points for the shot!!!");
}
else {
    // Do nothing or provide an empty statement
}

/*
Empty else Block: In JavaScript, an empty else block is valid, and you can simply leave it empty or omit the else block entirely if you don't need any action for the failing condition.
*/