// Problem: Printing the powers of 2 table up to 2^n

// Getting input from the command line
const args = process.argv.slice(2);
const n = parseInt(args[0]);

// Validating input
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer for n.");
} else {
    // Printing powers of 2 up to 2^n
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
