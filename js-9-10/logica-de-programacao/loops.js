import compare from "./calculator.js";

// Array
const  numberlist = [[5, 4], [3, 4], [0, 0], [25, 30], [157, 157.1]];

// for (let i = 0; i < numberlist.length; i++) {
//    compare(numberlist[i][0], numberlist[i][1]);
// }

//let i = 0;
//while (i < numberlist.length) {
//  compare(numberlist[i][0], numberlist[i][1]);
//    i = i + 1;
// }

numberlist.map(([x, y]) => {
  return compare(x, y);
} ) ;