// console.log(a);
// fun();
// console.log(b);
// var b=10; //overriding the b variable from client. 
// var fun=function(){
//     console.log("in client");
// }
// function foo(){
//     console.log("bye");
// }
// console.log(b);

//named exports
import {a,fun as greet,d,p} from './4_lib.js';
console.log(a);
console.log(d);
console.log(p);
// fun()
greet()

//default export
import haathi from './4_lib.js'
haathi()

import { increment,getCount } from './4_lib.js';

console.log(getCount());
increment()
console.log(getCount());
