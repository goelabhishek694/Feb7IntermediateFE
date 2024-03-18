const fs = require("fs");
// console.log("Before");
// const resumeWillBeReadPromise=fs.promises.readFile("./f12.txt"); //promise
// //consume promise
// resumeWillBeReadPromise.then(function(data){
//     console.log("Promise is fulfilled");
//     console.log(data+"");
// }).catch(function(err){
//     console.log("Promise is rejected");
//     console.log(err.message);
// })
// console.log("After");

//chaining of promises
// console.log("Before");
// const promiseF2=fs.promises.readFile("./f2.txt");
// promiseF2.then((data)=>{
//     console.log(data+"");
//     return fs.promises.readFile("./f13.txt");
// }).then((data)=>{
//     console.log(data+"");
//     return fs.promises.readFile("./f4.txt");
// }).then((data)=>{
//     console.log(data+"");
// }).catch((err)=>{
//     console.log(err.message);
// })
// console.log("After");

// let promise = new Promise(function(resolve, reject) {
//     //you are reading file , if file is succes
//     setTimeout(() => resolve(1), 1000);
//     // if (err){
//     //     reject(err)
//     // }
//     // else resolve(data)
//   });
// promise.then((data)=>{
//     console.log("promise resolved",data);
// })
// promise.catch(err=>console.log("promise rejected",err))

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
//   promise.then(data=>{
//     console.log(data);
//     return data*2; // you are returning a promise
//   }).then(data=>{
//     console.log(data);
//     return data*2;
//   }).then(data=>{
//     console.log(data);
//   })

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);

//   });
//   promise.then(function(result) {
//     console.log(result);
//     return result * 2; //this value is returned as a promise only
//   });

//   promise.then(function(result) {
//     console.log(result);
//     return result * 2;
//   });

//   promise.then(function(result) {
//     console.log(result);
//     return result * 2;
//   });

//------------------------Calbacks to promises-----------------------

// console.log("Before");
// const promise=promReadFile("./f22.txt");
// promise.then(function(data){
//     console.log("Data inside the file is "+data);
// })
// promise.catch(err=>{
//     console.log(err.message);
// })
// console.log("After");

//paramter
// function promReadFile(path){
//     let fileReadPromise=new Promise(function(resolve,reject){
//         fs.readFile(path,(err,value)=>{
//             if(err) reject(err)
//             else resolve(value)
//         })
//     })
//     return fileReadPromise;
// }

const { runAlgo } = require("./lib");
let amount = 100;
let priceOfOne = 20;
let paymentGatewayPromise = runAlgo();

paymentGatewayPromise.then(() => {
  amount = amount - priceOfOne;
  console.log("Amount: ", amount);
});

paymentGatewayPromise.catch((err) => {
  console.log(err);
});

//promises have a separate queue clled microtask queue , it has more priority . 

paymentGatewayPromise.then(()=>{
    amt=amt-promise;
    amt=amt-promise;
})
    // if a developer deducts here two times problem right? Then we can say promises are better than callbacks?