// Retrieving the year from the command line
const args = process.argv.slice(2);
const year = parseInt(args[0]);

// Checking if the year is a four-digit number
if (year >= 1000 && year <= 9999) {
    // Checking if the year is a leap year
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    // Displaying the result
    console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");
} else {
    console.log("Please enter a valid 4-digit year.");
}