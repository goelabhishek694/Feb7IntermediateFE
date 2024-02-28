// //strings
// var a="hello";
// var b='bye'
// console.log(a+" "+b) //concatenate a string
// //  var str= 'i am 10
// //  years old'
// var age=25;
// //string literal
//  var str= `i am ${age}
//  years old`;
//  console.log(str);

// //number
// var num=234;
// console.log(Math.floor(234/5))
// console.log(Math.ceil(234/5))

// ///boolean 
// var isMale=true;

// //null
// var y=null; // signifies empty 


// //undefined
var z; //my variable does not have a value yet.
// console.log(z);
// // z=10; //initialize 
// // console.log(z);
// //that value is not present yet. 

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof num);
// console.log(typeof isMale);
// console.log(typeof z);
// console.log(typeof y);

// //hw do typeof typeof 
// console.log(typeof typeof isMale);
// console.log(typeof typeof z);
// console.log(typeof typeof y);


//non primitives 

//array

// var a=[]; 
// var b=new Array();

// a=[1,2,3,4];
// console.log(a);
// console.log(a.length);

var a=[1,2,"hello",true,
function(){console.log("bye bye ")}];

// console.log(a[3]);
// console.log(a[4]);
// a[4]();

//how to empty my array ?
// a=[];
// a.length=0;
//iterate and remove all 
// console.log(a);

// var b=a;
// a.pop();
// console.log(a);
// console.log(b);
// a.push(10);
// a.unshift(100);
// console.log(a);
// a.pop();
// a.shift();
// console.log(a);
// console.log(typeof a) //everything in js is an object
// console.log(Array.isArray(b))
// console.log(Array.isArray(z))
// console.log(a.indexOf(true));
// console.log(a.indexOf(false));

// //functions 
// // function declaration
// function fn(){
//     console.log(1)
// }

// fn() //invooked immediately

// var foo=function(){
//     console.log("i am function epxression");
// }
// foo()
// console.log(typeof foo);

// var arrowFn=(a,b)=>{
//     console.log(a,b,"hello");
// }
// arrowFn(10,20);

//Objects 

var a={};
var a=new Object(); //constructor function, insantiated a new class

var dog={
    name:"Pluto",
    age:4,
    isMale:true,
    breed: "Labrador",
    hobby:["jumping,eating"],
    owner:{
        name:"Abhi",
        age:56
    },
    "key":10
}
//dot notation -> if name of the key is known
console.log(dog.name);
console.log(dog.age);
console.log(dog.owner.name);
console.log(dog);
var arr=["10","20","30"];
console.log(arr);
console.log(arr[2]);

//bracket notation -> when name of the key is not known
console.log(dog["breed"]);
var z="hobby"

console.log(dog[z]);

// ["Pluto",4,true,["j","e"],["abhi",56]]

//traversing over objects 

// for in loop -> gives us keys of an object 
// for(var key in dog){
//     console.log(key,dog[key]);
// }

let arrOfKeys=Object.keys(dog);
for(var i=0;i<arrOfKeys.length;i++){
    console.log(dog[arrOfKeys[i]]);
}
// console.log(dog.chameli);








