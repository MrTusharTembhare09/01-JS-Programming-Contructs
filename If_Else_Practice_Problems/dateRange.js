// Retrieving command-line arguments for day and month
const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

// Checking if the given date is between March 20 and June 20
let isValid = false;
if ((month === 3 && day >= 20) ||  // Checking March 20 onwards
    (month > 3 && month < 6) ||   // Checking months April and May
    (month === 6 && day <= 20)) {  // Checking up to June 20
    isValid = true;
}

// Displaying the result
console.log(isValid);