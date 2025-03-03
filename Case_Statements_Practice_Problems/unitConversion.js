// Problem: Converting different length units based on user input
// Getting input from the command line
const args = process.argv.slice(2);
const conversionType = parseInt(args[0]); // Type of conversion
const value = parseFloat(args[1]); // Value to convert

// Checking if input is valid
if (isNaN(conversionType) || isNaN(value) || conversionType < 1 || conversionType > 4) {
    console.log("Please enter a valid conversion type (1-4) followed by a number.");
} else {
    let result;
    switch (conversionType) {
        case 1:
            // Converting Feet to Inches
            result = value * 12;
            console.log(`${value} Feet = ${result} Inches`);
            break;
        case 2:
            // Converting Feet to Meters
            result = value * 0.3048;
            console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
            break;
        case 3:
            // Converting Inches to Feet
            result = value / 12;
            console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
            break;
        case 4:
            // Converting Meters to Feet
            result = value / 0.3048;
            console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
            break;
        default:
            console.log("Invalid choice. Please select a valid conversion option.");
    }
}
