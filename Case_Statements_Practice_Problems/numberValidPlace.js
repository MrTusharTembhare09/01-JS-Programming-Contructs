// Problem: Reading a number and displaying its place value using switch-case
// Getting input from the command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Checking if input is valid (should be powers of 10)
if (![1, 10, 100, 1000, 10000, 100000, 1000000].includes(number)) {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
} else {
    // Using switch-case to determine place value
    let place;
    switch (number) {
        case 1: place = "Unit"; break;
        case 10: place = "Ten"; break;
        case 100: place = "Hundred"; break;
        case 1000: place = "Thousand"; break;
        case 10000: place = "Ten Thousand"; break;
        case 100000: place = "Lakh"; break;
        case 1000000: place = "Ten Lakh"; break;
        default: place = "Invalid"; // This will never be reached due to validation
    }
    // Displaying the result
    console.log("The corresponding place value is:", place);
}
