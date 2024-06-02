// // Create two variables, one for your name and another for your age. Print a sentence combining those variables.
// let full_name="Simrika KC";
// let age=20;
// let concat=full_name+" " +age;
// console.log(concat);

// // Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.
// let b= "10";
// let multiply=b*b;
// let conversion=Number(multiply);
// console.log(conversion);
// console.log(typeof conversion);

// //Write code to check if the character stored in a variable is uppercase or lowercase.Print &quot;uppercase&quot; or &quot;lowercase&quot; accordingly. (Hint: Use character codes)
// let character = 'A'; // Replace with the character you want to check

// if (character.length === 1) {
//     let charCode = character.charCodeAt(0);
    
//     if (charCode >= 65 && charCode <= 90) {
//         console.log("uppercase");
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log("lowercase");
//     } else {
//         console.log("The character is not an alphabetic letter.");
//     }
// } else {
//     console.log("Please provide a single character.");
// }

// // Declare two variables with numeric values. Add them together and print the sum. Then,
// // subtract the smaller number from the larger number and store the difference in a new
// // variable. Print the difference.
// const first_value=10;
// const second_value=20;
// sum=first_value+second_value;
// difference=second_value-first_value;
// console.log(sum);
// console.log(difference)

// // Imagine you have a variable storing a product price. Write code to apply a 10%
// // discount and print the discounted price.
// let price = 100;
// let discount_percent = 0.10;
// let discountedPrice = price - (price * discount_percent);
// console.log("The discounted price is: $" + discountedPrice);

//   const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= 2 * height - 1; col++) {
//     if (col >= height - row + 1 && col <= height + row - 1) {
//       line += '*';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }

const height = 5; 
for (let row = 1; row <= height; row++) {
  let line = '';
  for (let col = 1; col <= row; col++) {
    line += '*';
  }
  console.log(line);
}
