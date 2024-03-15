// var a=100;
// console.log(a); //GEC
// console.log(this.a);
// console.log(window.a);

// let b=1000;
// console.log(b); //in GEC
// console.log(this.b); //in window 
// console.log(window.b); //in window 

// console.log(this===window); //true

// c=20;
// console.log(c); //GEC
// console.log(this.c);//in window 
// console.log(window.c);//in window 


'use strict'

// var d=20; 


// var firstName="Tommy";
// let dog={
//     firstName:"Pluto", //property
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//     } //method
// }
// dog.sayHi();
// let greet=dog.sayHi;
// greet() //function -> this-> ud //error

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         function inner(){
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() //this-> ud
//     }
// }

// dog.sayHi(); //pluto , error 

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         const inner=()=>{
//             console.log(`${this.firstName} says hi `);
//         }
//         inner()
//     }
// }

// dog.sayHi()