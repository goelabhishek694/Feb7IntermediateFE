// //prototypes 

// //everything is js is an object 

// let person={
//     name:"Akanksha",
//     age:23,
//     address:{
//         city:"Bokaro"
//     },
//     greet:function(){
//         console.log(`${this.name} says Namaste`);
//     }
// }

// // let person=new Object();

// // class Object{
// //     constructor(){

// //     }


// // }


// let arr=[10,20,30];

// function abc(){
//     console.log("hello");
// }

// //inheritance in js isknow as prototypical inheritance 

// let person2=Object.create(person) //person2 object has been created and it has inherited all the methods and properties of person object 
// console.log(person2);

// person2.name="Satyam";
// // person.greet();
// // person2.greet();

// // console.log(person2.__proto__.name);

// console.log(person2.hasOwnProperty("name"));

// //custom properties -> polyfills 

// // arr.sum=function(){
// //     let total=0;
// //     for(let i=0;i<arr.length;i++){
// //         total+=arr[i]
// //     }
// //     console.log(total);
// // }

// // arr.sum();

// // // calculate sum of arr2
// let arr2=[30,40,50];
// // arr2.sum //undefined 
// // //undefined()

// // arr2.sum()


// Array.prototype.sum=function(){
//     let total=0;
//     console.log("everyone can access me ");
// }

// arr.sum();
// arr2.sum();

// let obj=new Object(); -//> constructor fn 

// class Pers {
//     constructor(name, age) {
//         this.fName = name;
//         this.old = age;
//     }
// }

function Pers(name,age){
    this.fName=name;
    this.old=age;
}

let p2=new Pers("Ashutosh",24);
//1. en empty object is created -> {}
//2. this->{}
//3 obj is returned


console.log(p2);
// p2={
//     name:"Ashutosh",
//     age:24
// }
