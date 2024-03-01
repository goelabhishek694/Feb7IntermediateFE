//quiz-4 launched
//quiz-5
// var firstName="Tommy";
// let dog={
//     firstName:"Pluto", //property
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//     } //method
// }

// dog.sayHi();
// let greet=dog.sayHi;
// greet()

// quiz-6
// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     sayHi:function(){
//         console.log(`${this.firstName} says hi `);
//         function inner(){
//             console.log(`${this.firstName} says hi `);
//         }
//         inner() //this->window
//     }
// }

// dog.sayHi();

//quiz-7
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

// dog.sayHi();
// sayHi this-> dog
// this->this of sayHi->dog

//quiz-8

// var firstName="Tommy";
// let dog={
//     firstName:"Pluto",
//     arrowSayHi:()=>{
//         console.log(`${this.firstName} says hi `)
//         const inner=()=>{ 
//             console.log(`${this.firstName} says hi `)
//         }
//         inner() 
//     }
// }

// dog.arrowSayHi(); 

function add(x, x) {
    return x + x;
}

let ans=add(2,3)
console.log(ans);

// gec
// MA
// add:f{...}
// ans:ud

// CE
// ans:6

// EC of add 
// MA:
// x:ud

// CE
// x:3

//count the number of items in cart 
// var count=10;
// for(var i=0;i<cart.length;i++){
//     var count=cart[i];


// }



