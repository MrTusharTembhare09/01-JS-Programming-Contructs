// Problem: Calculating the Nth Harmonic number

// Getting input from the command line
const args = process.argv.slice(2);
const n = parseInt(args[0]);

// Validating input
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer for n.");
} else {
    // Initializing harmonic sum
    let harmonicSum = 0;

    // Calculating the harmonic number
    for (let i = 1; i <= n; i++) {
        harmonicSum += 1 / i;
    }

    // Displaying the nth harmonic number
    console.log(`The ${n}th Harmonic number is:`, harmonicSum.toFixed(6));
}
