// console.log(a);
// var a=10;
// console.log(a);

// console.log(b);
// let b=100;
// console.log(b);

// //var
// var a; //declaration
// a=10; //initilization
// a=20; // re initilization
// var a=100;  //re declaration 

// //let
// let a; //declaration
// a=10; //initilization
// a=20; // re initilization
// let a=100;  //cannot re declare

// //const
// const a=10; //together dec+init
// a=20; // cannot re initilization
// const a=100;  //cannot re declare

//scope for var -> global , function 

// var a=10;
// function foo(){
//     var b=100;
//     console.log(b);
//     console.log(a);
// }
// console.log(b); //referrence error 
// foo();
// console.log(a);

//type error 
// const a=100;
// a=20;

//syntax error
// funct foo(){
//     console.log("edws")
// }

// quiz-2
// var a=10;
// console.log(a);
// function fn(){
//     console.log(a);
//     var a=20;
//     a++;
//     console.log(a);
//     if(a){
//         var a=30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn()

// let, const -> block scoped
//block
// {

// }

// let a=10;
// {
//     console.log(a); //10
//     let b=100;
//     console.log(b); //100
// }
// console.log(b); //error 
// console.log(a);//10


//quiz-3
// function foo(){
//     let b=100;
//     {
//         var a=10;
//         let c=1000;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// foo();




