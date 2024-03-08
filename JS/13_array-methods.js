//slice 
// let arr=[10,20,30,40,50];
//starting at si and ending before ei
//[si,ei)
//original arr remains intact
// let slicedArr=arr.slice(2,4);
//start from 2 until end 
// let slicedArr=arr.slice(2);
//just add length of arr to it 
// let slicedArr=arr.slice(-2); 
// let slicedArr=arr.slice(3); 
// let slicedArr=arr.slice(1,-1); 
// let slicedArr=arr.slice(1,4); 
// console.log(slicedArr);
// console.log(arr);

//splice
const cars=["Porsche","Bentley","Astor","Lexus","Lykan","Maserati"];
//remove elements 
//si,count
// let splicedArr=cars.splice(2,1);
// console.log(splicedArr);
// console.log(cars); //it alters the original arr

//replace
// let splicedArr=cars.splice(2,1,"MG");
// console.log(splicedArr);
// console.log(cars);

//adding
let splicedArr=cars.splice(2,0,"Rolls-Royce","Mclaren");
console.log(splicedArr);
console.log(cars);

//concat
// let arr2=[60,70,80];
// let concatArr=arr.concat(arr2);
// console.log(concatArr);
// console.log(arr);
// console.log(arr2);

// Array.prototype.myConcat=function(arr2){
//     const arr1=this;
//     return [...arr1,...arr2]
// }

// console.log(arr.myConcat(arr2));


//split 
//takes a delimeter
let str="Hi i am Satyam";
let arr=str.split(" ");
console.log(arr);

//join-> join elements of aray into string using delimeter
let joinedStr=arr.join(" ");
console.log(joinedStr);



