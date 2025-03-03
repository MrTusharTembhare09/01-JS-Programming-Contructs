// Problem: Computing the factorial of a given number

// Getting input from command line
const args = process.argv.slice(2);
const number = parseInt(args[0]);

// Validating input
if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    let factorial = 1;

    // Calculating factorial using a loop
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Displaying the result
    console.log(`${number}! = ${factorial}`);
}
