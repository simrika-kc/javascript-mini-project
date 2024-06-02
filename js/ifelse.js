//1 
// let password = prompt("Enter your password:");

// if (password.length > 12) {
//     console.log("Strong password");
// } else if (password.length >= 8) {
//     console.log("Medium password");
// } else {
//     console.log("Weak password");
// }


//2 
// let char = prompt("Enter a character:").toLowerCase();

// if ('aeiou'.includes(char)) {
//     console.log(`${char} is a vowel.`);
// } else {
//     console.log(`${char} is a consonant.`);
// }

//3
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess = parseInt(prompt("Guess the number (between 1 and 10):"));

// if (guess === randomNumber) {
//     console.log("Correct!");
// } else if (guess < randomNumber) {
//     console.log("Guess higher!");
// } else {
//     console.log("Guess lower!");
// }

//4
// let price = parseFloat(prompt("Enter the product price:"));
// let taxRate = parseFloat(prompt("Enter the tax rate (e.g., 8 for 8%):")) / 100;

// let finalPrice = price + (price * taxRate);
// console.log(`The final price with tax is: ${finalPrice.toFixed(2)}`);

//5 
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter an operator (+, -, *, /):");
// let result;

// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else if (operator === '/') {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error! Division by zero.";
//     }
// } else {
//     result = "Invalid operator.";
// }

// console.log(`The result is: ${result}`);

//6 
// let age = parseInt(prompt("Enter your age:"));

// if (age < 13) {
//     console.log("We recommend watching Animation movies.");
// } else if (age >= 13 && age < 18) {
//     console.log("We recommend watching Action movies.");
// } else {
//     console.log("We recommend watching Drama movies.");
// }

//7
// let dateInput = prompt("Enter a date (YYYY-MM-DD):");
// let dateObj = new Date(dateInput);
// let day = dateObj.getDay();

// if (day === 6 || day === 0) {
//     console.log("It's a weekend!");
// } else {
//     console.log("It's a weekday.");
// }

//8
// let number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number === 0) {
//     console.log("The number is zero.");
// } else {
//     console.log("The number is negative.");
// }

//9
// let number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5.");
// } else if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// } else if (number % 5 === 0) {
//     console.log("The number is divisible by 5.");
// } else {
//     console.log("The number is not divisible by 3 or 5.");
// }

// 10
// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));

// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log("The sum is even.");
// } else {
//     console.log("The sum is odd.");
// }
