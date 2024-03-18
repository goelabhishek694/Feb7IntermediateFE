const fs=require("fs");
//callback hell
// console.log("before");
// fs.readFile("./f11.txt", (err, data1) => {
//   if (err) console.log(err);
//   fs.readFile("./f2.txt", (err, data2) => {
//     if (err) console.log(err);
//     fs.readFile("./f3.txt", (err, data) => {
//       if (err) console.log(err);
//       fs.readFile("./f4.txt", (err, data) => {
//         if (err) console.log(err);
//         else console.log(data1 + "\n" + data2);
//       });
//     });
//   });
// });
// console.log("After");

// console.log("before");
// function f1cb(err, data) {
//   if (err) console.log(err);
//   console.log(data+"");
//   fs.readFile("./f2.txt", f2cb);
// }
// function f2cb(err, data) {
//   if (err) console.log(err);
//   console.log(data+"");
//   fs.readFile("./f3.txt", f3cb);
// }
// function f3cb(err, data) {
//   if (err) console.log(err);
//   console.log(data+"");
//   fs.readFile("./f4.txt", f4cb);
// }
// function f4cb(err, data) {
//   if (err) console.log(err);
//   else console.log(data+"");
// }
// fs.readFile("./f1.txt", f1cb);
// console.log("After");


//advanced billing system 

const {runAlgo}=require("./lib");
let amount=100;
let priceOfOne=20;
runAlgo(amount,cb);
//deducting ur money
function cb(){
    amount=amount-priceOfOne;
    console.log("Amount: ",amount);
}
console.log("After");

//1. bested callbacks
//2. inversion of control 
// we do not predfer callback based functions 