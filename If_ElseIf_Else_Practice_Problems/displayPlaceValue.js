// Reading a number and displaying its place value
const args3 = process.argv.slice(2);
const number3 = parseInt(args3[0]);

if ([1, 10, 100, 1000, 10000, 100000, 1000000].includes(number3)) {
    let place;
    if (number3 === 1) place = "Unit";
    else if (number3 === 10) place = "Ten";
    else if (number3 === 100) place = "Hundred";
    else if (number3 === 1000) place = "Thousand";
    else if (number3 === 10000) place = "Ten Thousand";
    else if (number3 === 100000) place = "Lakh";
    else if (number3 === 1000000) place = "Ten Lakh";
    console.log("The corresponding place value is:", place);
} else {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
}