// Importing process module to read command-line arguments
const args = process.argv.slice(2);

// Parsing the input number
const n = parseInt(args[0]);

// Validating input
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    let power = 0;
    let value = 1;

    // Printing powers of 2 using while loop
    console.log("Power of 2 Table:");
    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        value *= 2; // Multiplying by 2 to get the next power
        power++;    // Incrementing power
    }
}
