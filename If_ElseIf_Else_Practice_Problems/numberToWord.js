// Retrieving the number from the command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Checking if the input is a single-digit number
if (number < 0 || number > 9 || isNaN(number)) {
    console.log("Please enter a valid single-digit number (0-9). ");
} else {
    // Converting number to word using if-else statements
    let word;
    if (number === 0) word = "Zero";
    else if (number === 1) word = "One";
    else if (number === 2) word = "Two";
    else if (number === 3) word = "Three";
    else if (number === 4) word = "Four";
    else if (number === 5) word = "Five";
    else if (number === 6) word = "Six";
    else if (number === 7) word = "Seven";
    else if (number === 8) word = "Eight";
    else if (number === 9) word = "Nine";
    
    // Displaying the result
    console.log("The number in words is:", word);
}