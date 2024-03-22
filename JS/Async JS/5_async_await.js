// //if we use async keyword before a function , then that function is always going to return us a promise 

// async function foo(result){
//     return 20*result; //instantly resolved promise
// }


// // let ans=foo();
// // ans.then((data)=>{console.log(data)}) //async thing 
// // console.log(ans);
// console.log("befroe async function");
//  function fun(seq){
//     try{

    
//     console.log("before");
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(100)
//         },2000)
//     })
//     // promise.then((data)=>console.log(data));
//     //await keyword makes js wait until the promise is setlled and val has been updated.
//     console.time()
//     let result=await promise;
//     //function execution pauses at line 19 . it only resumes when the promise is settled. 
//     //function execution is suspended at this line, until promise is settled 
//     //so js engine starts doing other jobs , like executing code outside of this func. so basically our cpu resources are not being watsed .
//     console.timeEnd()
//     console.log(result+seq);

//     console.time()
//     let num=await foo(result)
//     console.timeEnd()
//     console.log(num);

//     // return result;
//     console.log("after");
//     const str="hello";
//     str="bye";

//     //2api 
//     // res from 1st api is needed t fetch res from 2nd api -> you would have to wait . so it is an async serial task . 
// }
// catch(err){
//     console.log("caugh in catch",err)
// }
// }


// //req to server by multiple users -> this is going to be parallel 
// fun(1)
// // fun(2)
// // fun(3)
// // fun(4)
// // fun(5)
// // fun(6)
// // fun(7)
// // fun(8)
// // fun(9)
// console.log("after async function");

// //you cannot use await w/o async keyword in a function-> gives error

// in top level of file , you can use await without being wrapped inside async function 
// let p=await foo();
// async function foo(){
//     return 6
// }
// console.log(p);


// let a = 2; //-> window 
// {
// {
// let a = 3; //a crated inside new scope 
// {
// let a = 4; //a in another scope
// {
// let a = 5; // a in another scope
// console.log(a); //5
// }
// console.log(a); //4
// }
// console.log(a); //3
// }
// console.log(a);//2
// }
// Could you please draw a memory diagram for the above code?


// what is difference btw  promise or async. which situation we choose any one of this

// async-> syntacrtical sugar of promise. 

// when u have to make parallel req -> promise.all promise.all setlled 
// async/await 

var a = 25;
console.log(a); //25
foo();
function foo() {
var a = 50;
console.log('Hello'); //hello 
}
console.log(a);//50
// In the above code, foo function memory allocation phase 'a' will be initialized as 25 instead of undefined right.