// creating promise
// let promise = new Promise((resolve, reject) => {
//   let firstNumber = 10;
//   let secondNumber = 2;
//   const success = firstNumber - secondNumber;
//   if (success >= 5) {
//     resolve(`the subtracted result is given below:${success}`);
//   } else {
//     reject("promise rejected");
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async/await
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data fetched");
//     }, 1000);
//   });
// }
// async function getData(){
//     const data=await fetchData();
//     console.log(data);
// }
// getData();

const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find((num) => num > 30);
console.log(foundNumber);
