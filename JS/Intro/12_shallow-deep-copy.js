//shallow copy 
//when reference is copied instead of value 

let a=10;
let b=a; //10 

// ways to shallow copy 
// 1. spread operator 
// 2. Object.assign


// let dog={
//     fName:"Tommy",
//     breed:"labrador",
//     address:{
//         street: "Vasant Vihar",
//         city:"New Delhi"
//     }
// }
//it means copyObj is also pointing to same reference as dog objectg 
// let copyObj=Object.assign(dog);
// copyObj.fName="pluto"
// console.log(dog);
// console.log(copyObj);

// it means create a new obj (12k) and copy the contents of dog object . 
// using Object.assign only shallow copy is done, so all the referrences will be copied . 
// address->8k in both the objects
// let copyObj=Object.assign({"hobby":"playing","breed":"husky"},dog);
// copyObj.fName="pluto"
// copyObj.address.street="Karol Bagh"
// console.log(dog);
// console.log(copyObj);


//Deep Copy 
//when reference is not copied , value is copied

// 1. 
//     a. JSON.stringify()
//     b. JSON.parse()

// let stringifiedObj=JSON.stringify(dog);
// console.log(typeof stringifiedObj);
// console.log(stringifiedObj);
// let deepCopyObj=JSON.parse(stringifiedObj);
// console.log(deepCopyObj);

// deepCopyObj.address.street="KB";
// console.log(dog);
// console.log(deepCopyObj);

//deep copy polyfill
// let arr=[10,20,30];
// //values
// for (let prop of arr){
//     console.log(prop);
// }
// //idx
// for (let prop in arr){
//     console.log(prop);
// }

// let dog={
//     fName:"Tommy",
//     breed:"labrador",
//     address:{
//                 street: "Vasant Vihar",
//                 city:"New Delhi"
//             },
//     friends:["Pluto","Tuffy","Scooby"]
// }

// function deepCopy(obj){
//     let isArr=Array.isArray(obj);
//     let cloning=isArr?[]:{}
//     for(let prop in obj){
//         // console.log("prop-> ",prop, "obj[prop]-> ",obj[prop]);
//         if(Array.isArray(obj[prop])){
//             cloning[prop]=[...obj[prop]]
//             for(let i=0;i<cloning[prop].length;i++){
//                 if(cloning[prop][i]== "object"){
//                     cloning[prop][i]=deepCopy(obj[prop][i])
//                 }
//             }
//         }
//         else if(typeof obj[prop]=="object"){
//             cloning[prop]=deepCopy(obj[prop]) //20k
//         }
//         else{
//             cloning[prop]=obj[prop]
//         }
//     }
//     return cloning;
// }

// let deepCopiedObj=deepCopy(dog);

// console.log(deepCopiedObj);
// deepCopiedObj.address.street="KB";
// console.log(dog);

// deepCopiedObj["friends"][0]="Bruno";
// console.log(deepCopiedObj);
// console.log(dog);

//flatten an array 
let arr=[1,2,3,[4,5,[6,7,8]]]
//[1,2,3,4]
//[1,2,3,[4,5]]
//[1,2,3,[4,5,[6,7,8]]]
function flattenArr(arr){
    let flattenedArr=[];
    for(let i=0;i<arr.length;i++){
        let ele=arr[i];
        if(Array.isArray(ele)){ //[4,5,[6,7,8]]
            let smallerFlattenArr=flattenArr(ele) //[4,5,6,7,8]
            flattenedArr.push(...smallerFlattenArr); //[1,2,3,4,5,6,7,8]
        }
        else flattenedArr.push(ele)
    }
    return flattenedArr
}

console.log(flattenArr(arr));

Array.prototype.flat=function(n){
    //n is how many levels you want it to flaten out 
    // n=1 for arr=[1,2,3,[4,5,[6,7,8]]]
    //op [1,2,3,[4,5,6,7,8]]

    // n=infinty -> flaten out completely 
}

// flatten an object  -> HW 
// let dog={
//     fName:"Tommy",
//     breed:"labrador",
//     address:{
//         street: "Vasant Vihar",
//         city:"New Delhi"
//     }
// }

// let dog={
//     "fName":"Tommy",
//     "breed":"labrador",
//     "address.street":"Vasant Vihar",
//     "address.city":"New Delhi"
// }


