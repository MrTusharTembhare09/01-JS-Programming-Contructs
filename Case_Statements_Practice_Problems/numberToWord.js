// Problem: Reading a single-digit number and displaying it in words using case
// Getting input from the command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Checking if input is a valid single-digit number
if (isNaN(number) || number < 0 || number > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
} else {
    // Using switch-case to determine the word representation
    let word;
    switch (number) {
        case 0: word = "Zero"; break;
        case 1: word = "One"; break;
        case 2: word = "Two"; break;
        case 3: word = "Three"; break;
        case 4: word = "Four"; break;
        case 5: word = "Five"; break;
        case 6: word = "Six"; break;
        case 7: word = "Seven"; break;
        case 8: word = "Eight"; break;
        case 9: word = "Nine"; break;
        default: word = "Invalid"; // This will never be reached due to the initial validation
    }
    // Displaying the result
    console.log("The number in words is:", word);
}
