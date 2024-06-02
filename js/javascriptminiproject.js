// // 1
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = [
//                 { id: 1, name: 'Alice', age: 25 },
//                 { id: 2, name: 'Bob', age: 30 },
//                 { id: 3, name: 'Charlie', age: 35 },
//             ];
//             resolve(data);
//         }, 2000);
//     });
// }

// // 2
// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count += 1;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// // 3
// function processData(numbers, callback) {
//     return numbers.map(callback);
// }

// // Example usage:
// const numbers = [1, 2, 3, 4];
// const doubled = processData(numbers, (num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

// // 4
// async function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = [
//                 { id: 1, name: 'Alice', age: 25 },
//                 { id: 2, name: 'Bob', age: 30 },
//                 { id: 3, name: 'Charlie', age: 35 },
//             ];
//             resolve(data);
//         }, 2000);
//     });
// }

// // Example usage:
// (async () => {
//     const data = await fetchData();
//     console.log(data);
// })();

// // 5
// function doubleNumbers(numbers) {
//     return numbers.map(num => num * 2);
// }

// // Example usage:
// const nums = [1, 2, 3, 4];
// console.log(doubleNumbers(nums)); // [2, 4, 6, 8]

// // 6
// function filterNumbers(numbers) {
//     return numbers.filter(num => num >= 10);
// }

// // Example usage:
// const nums = [5, 10, 15, 20];
// console.log(filterNumbers(nums)); // [10, 15, 20]
// // 7
// function findNumber(numbers) {
//     return numbers.find(num => num > 15);
// }

// // Example usage:
// const nums = [5, 10, 15, 20, 25];
// console.log(findNumber(nums)); // 20

// // 8
// function sumNumbers(numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// // Example usage:
// const nums = [1, 2, 3, 4, 5];
// console.log(sumNumbers(nums)); // 15

// // 9
// function transformArrayToObject(users) {
//     return users.reduce((obj, user) => {
//         obj[user.id] = user;
//         return obj;
//     }, {});
// }

// // Example usage:
// const users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 35 },
// ];
// console.log(transformArrayToObject(users));
// /*
// {
//     1: { id: 1, name: 'Alice', age: 25 },
//     2: { id: 2, name: 'Bob', age: 30 },
//     3: { id: 3, name: 'Charlie', age: 35 }
// }
// */

// // 10
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     describe() {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// // Example usage:
// const person = new Person('Alice', 25);
// console.log(person.describe()); // Alice is 25 years old.

// // 11
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);
//         this.grade = grade;
//     }

//     study() {
//         return `${this.name} is studying.`;
//     }
// }

// // Example usage:
// const student = new Student('Bob', 20, 'A');
// console.log(student.describe()); // Bob is 20 years old.
// console.log(student.study()); // Bob is studying.

// // 12
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 const data = [
//                     { id: 1, name: 'Alice', age: 25 },
//                     { id: 2, name: 'Bob', age: 30 },
//                     { id: 3, name: 'Charlie', age: 35 },
//                 ];
//                 resolve(data);
//             } else {
//                 reject('Failed to fetch data');
//             }
//         }, 2000);
//     });
// }

// // Example usage:
// fetchData()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//     // 13
//     async function fetchData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (Math.random() > 0.5) {
//                     const data = [
//                         { id: 1, name: 'Alice', age: 25 },
//                         { id: 2, name: 'Bob', age: 30 },
//                         { id: 3, name: 'Charlie', age: 35 },
//                     ];
//                     resolve(data);
//                 } else {
//                     reject('Failed to fetch data');
//                 }
//             }, 2000);
//         });
//     }

//     // Example usage:
//     (async () => {
//         try {
//             const data = await fetchData();
//             console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     })();

//     // 14
//     function getUniqueHobbies(users) {
//         return users.reduce((acc, user) => {
//             user.hobbies.forEach(hobby => {
//                 if (!acc.includes(hobby)) {
//                     acc.push(hobby);
//                 }
//             });
//             return acc;
//         }, []);
//     }

//     // Example usage:
//     const users = [
//         { name: 'Alice', hobbies: ['reading', 'hiking'] },
//         { name: 'Bob', hobbies: ['hiking', 'cooking'] },
//         { name: 'Charlie', hobbies: ['cooking', 'gaming'] },
//     ];
//     console.log(getUniqueHobbies(users)); // ['reading', 'hiking', 'cooking', 'gaming']

// //     Conceptual Questions
// // Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.

// // Promises are used in JavaScript to handle asynchronous operations. They provide a more readable and maintainable way to work with asynchronous code compared to traditional callback functions. Advantages include:

// // Avoiding Callback Hell: Promises help avoid deeply nested callbacks, making code more readable.
// // Chaining: Promises can be chained, allowing for sequential asynchronous operations.
// // Error Handling: Promises provide a clearer and more consistent way to handle errors using .catch().
// // What is a closure in JavaScript? Provide an example.

// // A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows a function to retain access to variables from an enclosing scope even after that function has finished executing.

// // function outerFunction() {
// //     let outerVariable = 'I am outside!';

// //     function innerFunction() {
// //         console.log(outerVariable);
// //     }

// //     return innerFunction;
// // }

// // const myFunction = outerFunction();
// // myFunction(); // 'I am outside!'
// // What is a callback function and why is it used in JavaScript?

// // A callback function is a function passed into another function as an argument to be executed later. Callbacks are used in JavaScript to handle asynchronous operations, such as API calls, without blocking the main thread.

// // What are async/await in JavaScript and how do they improve asynchronous programming?

// // async/await are syntactic features in JavaScript that make working with promises easier and more readable. async functions always return a promise, and await is used to pause the execution of an async function until the promise is resolved. They improve asynchronous programming by:

// // Making asynchronous code look and behave more like synchronous code.
// // Simplifying the syntax and reducing boilerplate associated with promises.
// // Improving error handling with try/catch blocks.
// // Write the difference between ES6 and JS.

// // ES6 (ECMAScript 2015) is a major update to JavaScript, introducing new syntax and features. Differences include:

// // Arrow Functions: Shorter syntax for writing functions.
// // Classes: Simplified syntax for creating objects and inheritance.
// // Template Literals: Improved string handling with embedded expressions.
// // Let and Const: Block-scoped variables.
// // Modules: Support for importing and exporting modules.
// // What are some of the major features introduced in ES6?

// // Major features introduced in ES6 include:

// // Arrow functions
// // Classes
// // Template literals
// // Let and const keywords
// // Default parameters
// // Destructuring assignment
// // Spread and rest operators
// // Promises
// // Modules
// // Enhanced object literals
