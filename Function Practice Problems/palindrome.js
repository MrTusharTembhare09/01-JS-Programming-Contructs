// Function to check if a number is a palindrome
function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

// Function to check if two numbers are palindromes
function checkPalindromeNumbers(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a palindrome.`);
    }
}

// Reading user input from command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter the first number: ", num1 => {
    readline.question("Enter the second number: ", num2 => {
        checkPalindromeNumbers(parseInt(num1), parseInt(num2));
        readline.close();
    });
});