// Problem: Checking if a number is prime

// Getting input from the command line
const args = process.argv.slice(2);
const num = parseInt(args[0]);

// Validating input
if (isNaN(num) || num < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
} else {
    // Initializing prime flag
    let isPrime = true;

    // Checking divisibility from 2 to sqrt(num) to optimize performance
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Displaying result
    if (isPrime) {
        console.log(`${num} is a Prime Number.`);
    } else {
        console.log(`${num} is NOT a Prime Number.`);
    }
}
