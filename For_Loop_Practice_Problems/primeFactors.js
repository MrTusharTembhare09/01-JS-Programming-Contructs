// Problem: Computing the prime factors of a number using an efficient approach

// Getting input from the command line
const args = process.argv.slice(2);
let number = parseInt(args[0]);

// Validating input
if (isNaN(number) || number <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    console.log(`Prime factors of ${number}:`);

    // Removing factors of 2
    while (number % 2 === 0) {
        console.log(2);
        number = number / 2;
    }

    // Checking for odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= number; i += 2) {
        while (number % i === 0) {
            console.log(i);
            number = number / i;
        }
    }

    // If remaining number is a prime greater than 2
    if (number > 2) {
        console.log(number);
    }
}
