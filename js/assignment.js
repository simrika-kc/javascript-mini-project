// 1
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += '*';
//   }
//   console.log(line);
// }

// 2
// const width = 8; 
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= width; col++) {
//     line += '*';
//   }
//   console.log(line);
// }
//   const height = 5; // Change this value to adjust the height of the triangle

// 3)
// for (let row = height; row >= 1; row--) {
//     let line = '';
//     for (let col = 1; col <= row; col++) {
//       line += '*';
//     }
//     console.log(line);
//   }

//   4)
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

// 5)
// const height = 5; 
// for (let row = height; row >= 1; row--) {
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

// 6)
// const width = 8; 
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= width; col++) {
//     if (row === 1 || row === height || col === 1 || col === width) {
//       line += '*';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }

// 7)
// const size = 5; 
// for (let i = 0; i < size / 2; i++) {
//   let line = '';
//   for (let j = 0; j < size; j++) {
//     if (j === size / 2) {
//       line += '*';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }

// let line = '';
// for (let i = 0; i < size; i++) {
//   if (i === size / 2) {
//     line += '*';
//   } else {
//     line += ' ';
//   }
// }
// console.log(line);
// for (let i = 0; i < size / 2; i++) {
//   let line = '';
//   for (let j = 0; j < size; j++) {
//     if (j === size / 2) {
//       line += '*';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }


// 8)
// const size = 5; 
// for (let row = 0; row < size; row++) {
//   let line = '';
//   for (let col = 0; col < size; col++) {
//     if (col === row || col === size - row - 1) {
//       line += '*';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }

// 9)
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += col;
//   }
//   console.log(line);
// }

// 10)
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += row;
//   }
//   console.log(line);
// }

// 11)
// const height = 5; 
// for (let row = height; row >= 1; row--) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += col;
//   }
//   console.log(line);
// }
// 12)

// const size = 5; 
// for (let row = 1; row <= size; row++) {
//   let line = '';
//   for (let col = size; col >= 1; col--) {
//     line += col;
//   }
//   console.log(line);
// }

// 13)
// const height = 5; 
// for (let row = height; row >= 1; row--) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += col;
//   }
//   console.log(line);
// // }

// 14)
// const height = 5; 
// for (let row = height; row >= 1; row--) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += col;
//   }
//   console.log(line);
// }

// 15)
// const height = 5; 
// for (let row = 1; row <= height; row++) {
//   let line = '';
//   for (let col = 1; col <= row; col++) {
//     line += String.fromCharCode(64 + col);
//   }
//   console.log(line);
// }





























