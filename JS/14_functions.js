//functions are first class citizens of JS 
//function is a type of special object that implements callable constructor
//functions are special type of objects that can also be called  
//

// let obj={
//     name:"scaler"
// }

// obj() //error->obj is not a function

function foo(){
    console.log("hi i am foo");
    foo.count++;
}

foo.count=0;
foo();
foo();
foo();
foo();

foo.showCount=function(){
    console.log(`foo has been called ${this.count} times`);
}

foo.showCount(); //method this-> foo 

a();
//a:uninitialized //error 
// let a=function(){
//     console.log("i am a function expression");
// }

var a=function(){
    console.log("i am a function expression");
}
//a:undefined -> error -> a is not a function 

//arrow functions

// const arrFn=()=>{

// }

// const arrFn=(a,b)=>{

// }
// const arrFn=a=>{

// }




