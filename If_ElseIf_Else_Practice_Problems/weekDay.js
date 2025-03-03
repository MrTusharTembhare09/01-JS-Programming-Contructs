// Retrieving the number from the command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Reading the number and displaying the corresponding weekday
if (number >= 1 && number <= 7) {
    let day;
    if (number === 1) day = "Sunday";
    else if (number === 2) day = "Monday";
    else if (number === 3) day = "Tuesday";
    else if (number === 4) day = "Wednesday";
    else if (number === 5) day = "Thursday";
    else if (number === 6) day = "Friday";
    else if (number === 7) day = "Saturday";
    
    // Displaying the weekday
    console.log("The corresponding weekday is:", day);
} else {
    console.log("Please enter a number between 1 and 7 to get a weekday.");
}


