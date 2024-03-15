// let name ="pluto";
// let breed="Labrador";

// //parent
// let dog={
//     name,
//     breed
// }

// console.log(dog);

// //child
// let myDog=Object.create(dog);
// console.log(myDog.name); //pluto
// myDog.name="Tommy";
// console.log(myDog);
// console.log(myDog.hasOwnProperty("name"));
// console.log(myDog.isPrototypeOf(dog)); //false
// console.log(dog.isPrototypeOf(myDog)); //true

// let ourDog=Object.create(dog);
// ourDog.lastName="the planet";
// ourDog.friends=["Tommy","Tuffy","Scooby"];

// for(let prop in ourDog){
//     //if it is earned and not inherited 
//     let isMyKey=ourDog.hasOwnProperty(prop);
//     if(isMyKey){
//         console.log(prop);
//     }
// }

// let arrOfProp=Object.keys(ourDog)
// console.log(arrOfProp);

// let arrofValue=Object.values(ourDog);
// console.log(arrofValue);

// //when we have an array then which methods can we use to traverse ? -> 

// arrOfProp.forEach((prop)=>console.log(prop+" -> "+ourDog[prop]))

// let arrOfArr=Object.entries(ourDog)
// console.log(arrOfArr);

// //destructuring
// arrOfArr.forEach(([key,value])=>{
//     // console.log("key:",arr[0])
//     console.log("key:",key)
//     // console.log("value:",arr[1])
//     console.log("value:",value)
// })

// let name1="pluto";
// let breed1="labrador"
// let obj1 = {name1,breed1}; //4k  
// let obj2= {name1:"pluto",breed1:"labrador"}; //8k
// let obj3=obj1
// // if(obj1==obj2) console.log("same"); 
// if(obj1==obj3) console.log("same"); 
// else console.log("pointing to diff mem location")
// //is there any difference between obj1 and obj2?

// // == in case of objects onlyc hecks of the underlying memory is same or not . 
// // === it checks value(mem location ) plus the type 


//property descriptors 

const myArr=[1,2,3];
console.log(myArr.length);
myArr.name="Scaler";
console.log(Object.keys(myArr));

console.log(delete myArr.name);
console.log(Object.keys(myArr));

console.log(delete myArr.length); // there must be some security present on this key . 
console.log(myArr.__proto__)
myArr.__proto__="hello"; //there must be some security which prevents from overwriting 
console.log(myArr.__proto__) //arr of method and prop or "hello" ?

// let anotherArr=[10,20,30]
// anotherArr.length; //error 

//how do we give permissions to our property
// const myObject={name:"Scaler"};
// const configuration={}; //1. data descriptor-> what kind of data can this property hold 2. accesor descriptor -> what all access permissions this property holds
// //i am going to define restrictions on my name property of myObject . restrictions are going to ber applied as per configuration object . 
// Object.defineProperty(myObject,"name",configuration)

const dog={}
Object.defineProperty(dog,"name",{
    value:"Pluto",
    writable:false,
    enumerable:false, //we cannot count this property now 
    configurable:false
});

dog.breed="Labrador";

console.log(dog);
console.log(Object.keys(dog)); //["breed"]
console.log(delete dog.name); //false
// console.log(delete dog.breed); //true
console.log(dog.name="Tommy");

Array.prototype.sum="hellow"
Object.delete

//giving similar permissions to all the keys ie entire object 
// prevent extensions seal freeze

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDb",
        user: "root",
        pwd: "admin"
    }
}

//CRUD
// console.log(config.appName); //reading 
// config.tempServer="scaler.com" //creating
// config.appName="interviewbit.com"; //update
// delete config.appName; //deleting
// console.log(config);

// PREVENT EXTENSIONS -> prevent the extension of object 
//new property cannot be added 
//can read update and delete

// let nonExtendableObj=Object.preventExtensions(config);
// nonExtendableObj.tempServer="interviewbit.com"; // i cannot create 
// console.log(nonExtendableObj.appName); //i can read
// nonExtendableObj.appName="https://scaler.com" // i can update
// delete nonExtendableObj.appName // i can delete
// console.log(nonExtendableObj);

// //hold true only for first level keys , not for nested 
// nonExtendableObj.database.name="hello";
// console.log(nonExtendableObj);
// let nonExtendableObjnested=Object.preventExtensions(config.database);

//Object.seal()
//cannot create delete 
//can update and read

// let nonExtendableObj=Object.seal(config);
// nonExtendableObj.tempServer="interviewbit.com"; // i cannot create 
// console.log(nonExtendableObj.appName); //i can read
// nonExtendableObj.appName="https://scaler.com" // i can update
// delete nonExtendableObj.appName // i cannot delete
// console.log(nonExtendableObj);


//Object.freeze()
// cannot add update delete
//can read

let nonExtendableObj=Object.freeze(config);
nonExtendableObj.tempServer="interviewbit.com"; // i cannot create 
console.log(nonExtendableObj.appName); //i can read
nonExtendableObj.appName="https://scaler.com" // i cannot update
delete nonExtendableObj.appName // i cannot delete
console.log(nonExtendableObj);







