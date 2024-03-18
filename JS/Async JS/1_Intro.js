// console.log("before");
// function fn(){
//     console.log("I am fn");
// }
// setTimeout(fn,2000); // set a timer for 2 sec  as soona s 2sec becoime 0 , fn would be called ? 
// console.log("after");

//q1
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
// console.log("I broke the while loop");
// }, 1000);
// console.log("After");
// while(a){

// }

//while loop refresher
// function fn(){
//     count=-1;
//     console.log("hello guys");
//     }
// var count=10
// while(count>0){
//     console.log("in while loop",count);
//     count--;
// }
// fn();

//q2

// console.log("Before");
// const cb2 = () => {
//         console.log("Set timeout 1");
//         while(1){

//         }
// }
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 1000) 
// setTimeout(cb1, 2000)
// console.log("After");

//after 1 sec -> cb2 is ready to be called and cb1 needs one more sec 
// before after set timeout 1 

//event loop callback queue intro
// console.log("Before");
// const cb2 = () => {
//         console.log("i am cb2");
// }
// const cb1 = () => {
//     console.log("i am cb1");
// }
// const cb3 = () => {
//     console.log("i am cb3");
// }
// setTimeout(cb1, 1000) 
// setTimeout(cb2, 2000)
// setTimeout(cb3, 1000)
// console.log("After");

//q3
// console.log("Before");
// const cb2 = () => {
//         console.log("Set timeout 1");
//         let timeInFuture = Date.now() + 5000;
//         while(Date.now() < timeInFuture){
//             // console.log("inside while");
//         }
// }
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 1000)
// setTimeout(cb1, 2000)
// console.log("After");


//FS module 

const fs=require("fs");


// //synchronous function provided by nodejs to read a file 
// console.log("Before");
// const buffer=fs.readFileSync("./f1.txt");
// console.log(buffer+" ");
// console.log("After");

// //asynchronous function provided by nodejs to read a file 

// console.log("Before");
// fs.readFile("./f1.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// });

// //2 args -> path , cb 
// // if path is correct and data is read completely then call cb function
// console.log("After");

//serial task synchronous code 
// console.log("before");
// let c1=fs.readFileSync("./f1.txt"); //after this task is completed
// let c2=fs.readFileSync("./f2.txt"); //then this gets picked up
// console.log(c1+"\n"+c2); //this is executed
// console.log("After"); //then this


//serial task , asynchronous code -> reading of files asynchronously in a particular manner 
console.log("before");
fs.readFile("./f11.txt",(err,data1)=>{
    if(err) {
        console.log(err);
    }
    fs.readFile("./f2.txt",(err,data2)=>{
        if(err) console.log(err);
        else console.log(data1+"\n"+data2);
    })
}); 
console.log("After"); 

//parallel task, asynchronous code 

// console.log("before");
// fs.readFile("./f1.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// }); 
// fs.readFile("./f2.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// })
// console.log("After"); 
