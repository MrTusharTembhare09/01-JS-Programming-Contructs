// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Reading user input from command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking user for a number
readline.question("Enter a number: ", num => {
    num = parseInt(num);
    
    // Checking if the number is prime
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        
        // Generating palindrome
        let palindrome = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindrome}.`);
        
        // Checking if the palindrome is also prime
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
    readline.close();
});
