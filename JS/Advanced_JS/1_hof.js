//HOF-> higher order functions

// function is accepted as a parameter by another function 
//                 and/or 
// function is retunred by aother function 

function fn(param){
    console.log("i receievd a param",param);
    if(typeof param==='function'){
        param()
    }
}

fn(foo)
function foo(){
    console.log("i am foo fn");
}

// fn-> hof
function xyz(foo){
    return foo;
}
let returnedFn=xyz(foo);
returnedFn()

// xyz->hof

let arr=[10,13,45,56,78,33,9];

//return arr which contains all even numbers
// function isEven(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i];
//         if(ele%2==0){
//             newArr.push(ele)
//         }
//     }
//     return newArr
// }

// let EvenArr=isEven(arr);
// console.log(EvenArr);

//return an arr which contains all odd jumbers 
// function isOdd(arr){
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         let ele=arr[i];
//         if(ele%2!==0){
//             newArr.push(ele)
//         }
//     }
//     return newArr
// }

// let OddArr=isOdd(arr);
// console.log(OddArr);

// repetitive steps 
// 1. creating arr 
// 2. traversing over arr 
// 3. returnign arr 

// unique 
// 1. logic 

function isEven(ele){
    return ele%2==0
}

function isOdd(ele){
    return ele%2!==0
}

function greaterThan25(ele){
    return ele>25
}

//do all repitivr steps in this 
function traverse(arr,logic){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        //logic
        if(logic(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let evenArr=traverse(arr,isEven);
let oddArr=traverse(arr,isOdd);
let greaterArr=traverse(arr,greaterThan25);

console.log(evenArr);
console.log(oddArr);
console.log(greaterArr);

// traverse is an hof because it is accepting another function as paramater 
//logic is a callback functio because it is being called back

//forEach
let bankStatement=[1000,-300,2000,4000,-1500];
//print your bank statement 
//for each ele in array a function is executed
//foreach does not return anything 
let ans=bankStatement.forEach(function(ele){
    console.log(ele);
    // return ele
})
// console.log(ans);

//MAP
// usd to inr
//return an array of indian rupees
let usdToInr=function(ele){
    return ele*85
}
let bankStatementInINR=bankStatement.map(usdToInr)
console.log(bankStatementInINR);

//polyfill for map 

Array.prototype.myMap=function(logic){
    let arr=this;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let val=logic(arr[i]);
        newArr.push(val)
    }
    return newArr
}
let bankStatementInINRMyMAP=bankStatement.myMap(usdToInr)
console.log(bankStatementInINRMyMAP);

//FILTER
//give me bank statement which contains all the earnings
let allDeposits=function(ele){
    //if condition is ttue, then ele is pushed inside arr
    return ele>0
}

// let allWithdrawals=function(ele){
//     return ele<0
// }

let earningsArr=bankStatement.filter(allDeposits);
let spendings=bankStatement.filter(ele=>ele<0);
console.log(earningsArr);
console.log(spendings);


//polyfill for filter
Array.prototype.myFilter=function(logic){
    let arr=this;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(logic(arr[i])) newArr.push(arr[i])
    }
    return newArr
}
let earningsArrMyFilter=bankStatement.myFilter(allDeposits);
console.log(earningsArrMyFilter);

//bank balance using uncool way 
function sumAll(bankStatement){
    let sum=0;
    for(let i=0;i<bankStatement.length;i++){
        let currEle=bankStatement[i];
        //updation of sum 
        sum=sum+currEle
    }
    return sum;
}
//REDUCE
//what is my bank balance using cool way

function sumAll(acc,curr){
    console.log("acc ->",acc," cur-> ",curr);
    return acc=acc+curr
}
// intial value of acc-> arr[0]
// curr-> arr[1] till arr.length
// let bankBalance=bankStatement.reduce(sumAll)

// intial value of acc->0
// curr-> arr[0] till arr.length
let bankBalance=bankStatement.reduce(sumAll,0)
console.log(bankBalance);

//polyfill for reduce 

Array.prototype.myReduce=function(logic,initialValue){
    let arr=this;
    let acc=initialValue!=undefined?initialValue:arr[0];
    let si=initialValue!=undefined?0:1
    for(let i=si;i<arr.length;i++){
        let returnedVal=logic(acc,arr[i])
        acc=returnedVal;
    }
    return acc
}

let bankBalanceMyReduce=bankStatement.myReduce(sumAll)
console.log(bankBalanceMyReduce);

//composability
//give all the expenses in inr 
// 1. filter out the expenses 
// 2. convert expenses into inr

// let expenses=bankStatement.filter(ele=>ele<0);
// let expensesInINR=expenses.map(ele=>ele*85);
// console.log(expensesInINR);

//chaining of methods
let expensesInINR=bankStatement.filter(ele=>ele<0).map(ele=>ele*85);

const worldCapitals = [
    {
      country: "India",
      capital: "Delhi",
      population: "2cr",
    },
    {
      country: "America",
      capital: "Washington DC",
      population: "6cr",
    },
    {
      country: "France",
      capital: "Paris",
      population: "2cr",
    },
  
    {
      country: "England",
      capital: "London",
      population: "4cr",
    },
    {
      country: "Germany",
      capital: "Berlin",
      population: "2cr",
    },
  ];

//Q1 print country name and their capital  
// [ India->Delhi, America->WashingtonDC, France->Paris , England->London, Germany->Berlin] 

let countryCapital=worldCapitals.map(obj=>obj.country+"->"+obj.capital);
console.log(countryCapital);

//Q2-> Return the number of countries with a particular population 
//{ 2cr: 3, 4cr: 1, 6cr: 1 }

let countryPopulation=worldCapitals.reduce((acc,curr)=>{
    let key=curr["population"];
    if(acc[key]){
        acc[key]=acc[key]+1
    }
    else acc[key]=1;
    return acc;
},{})
console.log(countryPopulation);

//Q3 get country name with population less than 5cr
//[India, France,England,Germany]

let countryName=worldCapitals.filter(obj=>{
    let population=Number(obj.population.split("cr")[0]);
    return population<5
}).map(obj=>obj.country)

console.log(countryName);

//with reduce only 

let ans2=worldCapitals.reduce((acc,curr)=>{
    let population=Number(curr.population.split("cr")[0]);
    if (population<5){
        acc.push(curr.country)
    }
    return acc
},[])

console.log(ans2);

var abc=100;