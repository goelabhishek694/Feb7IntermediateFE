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
console.log("Before");
const cb2 = () => {
        console.log("Set timeout 1");
        let timeInFuture = Date.now() + 5000;
        while(Date.now() < timeInFuture){
            // console.log("inside while");
        }
}
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000)
setTimeout(cb1, 2000)
console.log("After");

