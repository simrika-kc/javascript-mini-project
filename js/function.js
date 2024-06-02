// function greet(firstName,lastName){
//     return(`hello, ${firstName} ${lastName}`);

// }
// console.log(greet('Ram', 'Yadav'));
// console.log(greet('siva','Kc'));

// let add=function sum(a,b){
//     return a+b
// }
// console.log(add(2,5));

// let sub=function(a,b){
// return a-b
// }
// console.log(sub(7,1));

// const mul=(a,b)=>{
//     return a*b;
// }
// console.log(mul(234,765));

// const div=(a,b)=>{
//     return a/b;
// }
// console.log(div(6987333,3));

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// let john=new Person("John",25)
// console.log(john);

// let add=function sum(a,b){
// return (a+b)/2
// }
// console.log(add(2,6));

//creating object
// const person={
//     name:"John",
//     age:30,
// hobbies:["reading","cooking","running"]
// };
// console.log(person.name,person.age,person.hobbies.sort()); //sorting array in ascending order

// function add(a,b,printresult){
//     printresult();
//     return a+b;

// }
// let reult=add(2,3,printresult);
// console.log(reult);

// function printresult(){
//     console.log("the result is printed below: ");

// }

function mulsub(a, b, result) {
  result();
  return {
    subtraction: a - b,
    multiple: a * b,
    addition: a + b,
    division: a / b,
  };
}
let res = mulsub(7, 1, result);

console.log(res);
function result() {
  console.log("The result is printed below: ");
}
