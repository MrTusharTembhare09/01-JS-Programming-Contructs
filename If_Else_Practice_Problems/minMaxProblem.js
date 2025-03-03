// Creating an array to store 5 random three-digit numbers
let randomNumbers = [];

// Generating 5 random three-digit numbers and adding them to the array
for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; // Generating a number between 100 and 999
    randomNumbers.push(randomNum);
}

// Finding the minimum value from the array
let minValue = Math.min(...randomNumbers);

// Finding the maximum value from the array
let maxValue = Math.max(...randomNumbers);

// Displaying the generated numbers
console.log("Generated Numbers:", randomNumbers);

// Displaying the minimum and maximum values
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);