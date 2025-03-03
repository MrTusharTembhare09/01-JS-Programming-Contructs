// Problem: Reading a number and displaying the corresponding weekday using switch-case
// Getting input from the command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Checking if input is valid (between 1 and 7)
if (isNaN(number) || number < 1 || number > 7) {
    console.log("Please enter a valid number between 1 and 7.");
} else {
    // Using switch-case to determine the weekday
    let day;
    switch (number) {
        case 1: day = "Sunday"; break;
        case 2: day = "Monday"; break;
        case 3: day = "Tuesday"; break;
        case 4: day = "Wednesday"; break;
        case 5: day = "Thursday"; break;
        case 6: day = "Friday"; break;
        case 7: day = "Saturday"; break;
        default: day = "Invalid"; // This will never be reached due to validation
    }
    // Displaying the result
    console.log("The corresponding weekday is:", day);
}
