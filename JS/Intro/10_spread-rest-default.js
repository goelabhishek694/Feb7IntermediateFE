
//default parameter
// function add(x,y){
//     return x+y 
// }

// let ans=add(10,20);
// let ans2=add(10); //-> i do not get any error 
// console.log(ans); //30 
// console.log(ans2); //Nan -> not a number -> got unexpected behaviour

//rest parameter

// function add(x,...haathi){
//     // return x+y;
//     console.log(haathi);
//     let total=0;
//     for(let i=0;i<x;i++){
//         // total+=haathi[i]
//         total-=haathi[i]
//     }
//     return total
// }

//+ and "" -> implicit type conversion of number to string -> concatentation 
//- and "" -> implicit type conversion of string to number -> normal flow 

// let ans=add(6,20,30,40,"50",60,70);
// console.log(ans); 

//spread operator

// let arr=[10,20,30,40];

//q1 create a new array which has contents of arr and has element 50 as well [10,20,30,40,50]

// let arr2=[];
// for -> traverse over arr and push it's elemnts into arr2 nadn at last i would push 50 

//cool way 
// let arr2=[...arr,50]

// let arr2=[50,60,70]
//q2 merge  arr and arr2 into arr [10,20,30,40,50,60,70]

// arr=[...arr,...arr2];
// console.log(arr);

//cloning 
// q3 make a clone of arr

// let clonedArr=[...arr];
// clonedArr[3]=100
// console.log(clonedArr);
// console.log(arr);

let arr3=[10,20,30,[40,50,60]];
let arr4=[...arr3];
console.log(arr4);
arr3[3][0]=100;
console.log(arr3);
console.log(arr4);






