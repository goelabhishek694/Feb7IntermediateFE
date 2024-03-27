console.log("lib.js file is executed");
export let a=20;
export function fun(){
    console.log("hello");
}
var b=200; 
// foo() //this fn cannot be accessed by lib.js because fn/var declared in children cannot be acessed by parent

// setTimeout(()=>{
//     console.log(b);
// },2000)
let d=1000;
let p=230;

//only one default export in each file
export default function fName(){
    console.log("Scaler");
}

export{
d,p
}

let count=0;
export function increment(){
    count++;
}

export function getCount(){
    return count;
}