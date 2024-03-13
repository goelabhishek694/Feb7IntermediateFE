//lexical scoping 
// function outerFunction() {
//     const outerVar = 'I am from the outer function';
  
//     function innerFunction() {
//       const innerVar = 'I am from the inner function';
//       console.log(outerVar);
//     }
//     // console.log(innerVar);
  
//     innerFunction();
//   }
  
//   outerFunction();

  //closures->

// var num=10;
// function b(){
//     console.log(num);
// }
// function fn(){
//     var num=20;
//     b();
//     console.log(num);
// }
// fn()

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a++
//     return y
// }
// var z=x();
// console.log(z);
// z()

// function createCounter(y,z){
//     var a=y;
//     var b=z;
//     function count(){
//         y=y+z;
//         a=a+b;
//         console.log(y);
//         console.log(z);
//         return a
//     }
//     return count;
// }

// let c1=createCounter(10,5);
// console.log(c1());
// console.log(c1());

//nested closures
// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);
//             console.log("Hi GEC", iamINGEC) 
//         }
//     }
// }

// const fName=getFirstName("Abhishek");
// console.log(fName);

// const lName=fName("Goel")
// console.log(lName);

// lName()





//application of closures 

//1 Private variables
// function createCounter() {
//     let count = 0;
  
//     return function() {
//       count++;
//       console.log(count);
//     }
//   }
  
//   const counter1 = createCounter();
//   counter1();
//   counter1();
//   counter1();
//   counter1();
//   counter1();
//   const counter2 = createCounter();
//   counter2();
//   counter2();
//   counter2();
//   counter2();


//   function createEvenStack() {
//       const items=[] //this is aprivate varibale, no one can alter this . evryone ahs to use push method to add things into this stack 
//     return {
//         //   items:[],
//         push:function(item) {
//             if (item % 2 == 0) {
//                 console.log("Is pushed");
//                 items.push(item);
//             }
//             else {
//                 console.log("Please input even value");
//             }
//         },
//         pop:function() {
//             return items.pop();
//         }
//     };
// }
// //change to shift unshift 
// const stack = createEvenStack();
// stack.push(10);
// // stack.push(5);
// // stack.pop();
// // stack.items; 
// console.log(stack.items);
// stack.items = [10, 33, 1000]; //prevent behaviour
// console.log(stack.items);

//2 inifnte currying 

// function counter(arg){
//     let count=0;
//     count++;
//     if(arg==0){
//         return count;
//     }
//     else{
//         return function inner(arg){
//             count++;
//             if(arg==0){
//                 return count;
//             }
//             else return inner
//         }
//     }
// }
// console.log(counter(0));//1
// console.log(counter()(0));//2
// console.log(counter()()(0));//3
// console.log(counter()()()()()()()()(0));//9

//3 memoization 

function calc(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
// console.time();
// let res=calc(100000);
// console.log(res);
// console.timeEnd(); //0.8ms

// function memoize(fn){
//     let cache={};
//     return function(n){
//         let isAnsPresent=cache[n];
//         if(isAnsPresent!=undefined){
//             return cache[n] //return ans from cache if present
//         }
//         else{
//             const result=fn(n); //solve
//             cache[n]=result; //store 
//             return result; //return the result 
//         }
//     }
// }

// let efficientCal=memoize(calc);
// console.time();
// efficientCal(100000)
// console.timeEnd()

// console.time();
// efficientCal(100000)
// console.timeEnd()


//IQ of closures 

// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// i=5
// [fn{},fn{},fn{}]

// 4 5 6


function outer() {
    let arrFn = [];
    for (let i = 0 ;i < 3; i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();


// [fn{i=0},fn{i=1},fn{i=2}]

// 1 2 3