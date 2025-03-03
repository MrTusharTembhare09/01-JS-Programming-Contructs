// Problem: Finding all prime numbers in a given range

// Getting input range from command line
const args = process.argv.slice(2);
const start = parseInt(args[0]);
const end = parseInt(args[1]);

// Validating input
if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please enter a valid range (start and end) with start >= 2 and start <= end.");
} else {
    console.log(`Prime numbers between ${start} and ${end} are:`);

    // Iterating through the range
    for (let num = start; num <= end; num++) {
        let isPrime = true;

        // Checking divisibility from 2 to sqrt(num)
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        // Displaying prime numbers
        if (isPrime) {
            console.log(num);
        }
    }
}
