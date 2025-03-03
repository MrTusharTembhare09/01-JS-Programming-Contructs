// Performing arithmetic operations on three numbers and finding max and min
const args4 = process.argv.slice(2);
const a = parseInt(args4[0]);
const b = parseInt(args4[1]);
const c = parseInt(args4[2]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter three valid numbers.");
} else {
    // Performing arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;
    
    // Storing results in an array
    const results = [result1, result2, result3, result4];
    
    // Finding maximum and minimum values
    const max = Math.max(...results);
    const min = Math.min(...results);
    
    // Displaying results
    console.log("Results:");
    console.log("1. a + b * c =", result1);
    console.log("2. a % b + c =", result2);
    console.log("3. c + a / b =", result3);
    console.log("4. a * b + c =", result4);
    console.log("Maximum value is:", max);
    console.log("Minimum value is:", min);
}
