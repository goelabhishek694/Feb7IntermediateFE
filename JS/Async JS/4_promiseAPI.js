// let evenNumPromise = new Promise(function (resolve, reject) {
//   let num = Math.ceil(Math.random() * 10);
//   setTimeout(() => reject("error in promise"), 500);
//   setTimeout(() => resolve(num), 500);
// });

// console.log(evenNumPromise);
// evenNumPromise
//   .then((val) => {
//     console.log(evenNumPromise);
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(evenNumPromise);
//     console.log(err);
//   });

// let numDoublePromise = new Promise(function (resolve, reject) {
//   let num = 1;
//   resolve(num);
// });

// numDoublePromise
//   .then((val) => {
//     console.log(val); //1
//     return new Promise((resolve, reject) => {
//       resolve(val * 2); 
//     });
//   })
//   .then((val) => {
//     console.log(val); //2
//     return val*2 
//   })
//   .then(val=>{
//     console.log(val); //4
//     return Promise.resolve(val*2) // instantaneous resolving 
//   })
//   .finally(()=>{
//     console.log("b/w then blocks");
//   })
//   .then(val=>{
//     console.log(val); //8
//     return Promise.reject("promise rejected")
//   })
//   .then(val=>console.log(val))
//   .catch(err=>console.log(err))
//   .finally(()=>{
//     console.log("i am always executed");
//   })

//IQ
// function fun(){
//     console.log(10);
//     let p=Promise.resolve(12);
//     p.then(val=>console.log(val))
//     console.log(11);
// }

// //   fun().then(val=>console.log(val))
// fun()

//first catch block is going to take care of errors before itslef , if any new errors after the catch block it is going to be handled by next catch block
// Promise.resolve(100)
// .catch(err=>log(err))
// .then(val=>{
//     console.log(val);
//     return Promise.reject("err")
// })
// .catch(err=>console.log(err))


// Promise.resolve(200)
// .then(val=>{
//     console.log(val);
//     return Promise.reject("error from then")
// })
// .catch(err=>{
//     console.log(err)
//     throw new Error(err)
// })
// .catch(err=>console.log(err))



// try{
//  //doing some task 
//  //if we get an error , then it get caught in catch block
//  throw new Error("err")
// }
// catch(err){

// }

//if finally block is rejecting or throwing an error it is going to be the outcome of entire chain 
// Promise.reject("initial rejection")
// .finally((data)=>{
//     console.log(data);
//     throw new Error("i am an error");
//     return Promise.reject("an eror from finally")
// })
// .catch(err=>{
//     console.log("caught: ",err);
// })

// when finally block returns a promise that will not be rejected, it doesnt influence the outcome of parent promise. the resolved value of parent promise continues down the chain. 
// Promise.resolve("Initial data")
//     .finally((data) => {
//         console.log(data); //ud
//         return Promise.resolve("Finally resolved"); // it will not be promisified and returned to next then 
//         // return "Finally resolved"); // it will not be promisified and returned to next then 
//     })
//     .then((data) => {
//         console.log("Resolved:", data); 
//     });


// Promise.resolve("Initial data")
// .finally(data=>{
//     console.log(data);
//     return "Something"
//     // //this error is thrown internalluy by js which gets caught in catch 
//     // const num=10;
//     // num=20;
//     // throw new Error("an error in finally")
// })
// .then(val=>console.log(val))
// .catch(err=>{
//     console.log("caught: ",err.message);
// })


//<-------------------------------Promise.all()----------------------------->

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(10),1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("err in 2nd promise"),2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(12),3000)
})

// p1.then(val=>console.log(val))
// p2.then(val=>console.log(val))
// p3.then(val=>console.log(val))

//Promise.all -> if we want to execute multiple promises in parallel and wait for all of them to be ready , then we use Promise.all
// use case-> get data from several urls and process all of them together

// let promiseArr=Promise.all([p1,p2,p3]);
// console.log(promiseArr);
// promiseArr.then(arrOFdata=>{
//     console.log(arrOFdata);
// })
// .catch(err=>console.log(err))

//drawback -> All or nothing 
//if any of the promise gets rejected then whole of the promise gets rejected, basically we do not get any value we just get the rejected value 

//maybe we want a kind promise which gives values to those who got resolved and err to those who got rejected 

//<-------------------------------Promise.allSettled()----------------------------->

// let promiseArr=Promise.allSettled([p1,p2,p3]);
// console.log(promiseArr);
// promiseArr.then(arrOFdata=>{
//     console.log(arrOFdata);
//     let failedPromises=[]
//     arrOFdata.forEach(obj=>{
//         if(obj.status=="fulfilled"){
//             console.log(obj.value);
//         }
//         else{
//             failedPromises.push(obj.reason)
//         }
//     })
//     return Promise.reject(failedPromises)
// })
// .catch(err=>console.log(err))


//<-------------- pollyfill of promise.all()------------------>

Promise.myPromiseAll=function(arrOfPromises){
    return new Promise(function (resolve,reject){
        let unresolvedPromises=arrOfPromises.length; //3
        if(unresolvedPromises==0){
            resolve([]);
        }
        const resolvedPromiseArr=[];
        arrOfPromises.forEach(async (promise)=>{
            try{
                let value=await promise;
                resolvedPromiseArr.push(value);
                unresolvedPromises--;

                if(unresolvedPromises==0){
                    resolve(resolvedPromiseArr)
                }
            }
            catch(err){
                reject(err)
            }
        })
    })
}



let promise=Promise.myPromiseAll([p1,p2,p3])
promise.then((arrOfData)=>{
    console.log(arrOfData);
})

// custom promise API

// function promSetTimeout(delay){
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hey then")
//         },delay)
//     })
//     return promise;
// }

// let rp=promSetTimeout(1000);
// rp.then(val=>{
//     console.log(val);
// })
// rp.catch(err=>console.log(err))

//basic custom promise 

// const executorFn=(resolve,reject)=>{
//     setTimeout(()=>{
//         const value="hey then";
//         resolve(value)
//     },1000)
// };

// as soon as Promise function is called , my executor function is called immediately 
// const myPromise= new CustomPromise((resolve,reject)=>{
//     //mimicing that my req is taking ome time 
//     //like db call 
//     setTimeout(()=>{
//         const value="10";
//         resolve(value)
//     },2000)
// });
// myPromise.then(data=>{
//     console.log(data);
// })
// myPromise.then(data=>{
//     console.log(Number(data)+100);
// })
// myPromise.then(data=>{
//     console.log(data-100);
// })
// myPromise.catch(err=>console.log(err))

// // This custom implementation demonstrates how promises handle asynchronous operations, state management, and callback execution in JavaScript.
// function CustomPromise(executorFn){
//     const PENDING="pending";
//     const RESOLVED="fulfilled";
//     const REJECTED="rejected";  
//     let state=PENDING;
//     let value=undefined;
//     let scbArr=[]; // an array to store success callabcks then 
//     let fcbArr=[]; //// an array to store fail callabcks catch 

//     this.then=(cb)=>{
//         if(state==RESOLVED){
//             cb(value)
//         }
//         else{ // if state is pending 
//             scbArr.push(cb);
//         }
//     }

//     this.catch=(cb)=>{
//         if(state==REJECTED){
//             cb(value)
//         }
//         else{ // if state is pending 
//             fcbArr.push(cb)
//         }
//     }

//     const resolve=(val)=>{
//         state=RESOLVED;
//         value=val;
//         scbArr.forEach((cb)=>{
//             cb(val)
//         })
//     }

//     const reject=(err)=>{
//         state=REJECTED;
//         value=err;
//         fcbArr.forEach((cb)=>{
//             cb(val)
//         })
//     }

//     executorFn(resolve,reject)
// }
