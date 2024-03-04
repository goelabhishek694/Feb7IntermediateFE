let crick1={
    fName:"MS",
    lName:"Dhoni",
    // welcome:function(email,age,...args){
    //     console.log(`Welcome ${this.fName} ${this.lName}
    //     your email id is ${email} and your age is ${age}
    //     ${args}`);
    // }
    welcome:function(email,age){
        // console.log(arr);
        console.log(`Welcome ${this.fName} ${this.lName}
        ${email} ${age}`);
    }
}

crick1.welcome();

let crick2={
    fName:"Virat",
    lName:"Kohli",
}

let crick3={
    fName:"Shane",
    lName:"Warne",

}

let crick4={
    fName:"Kapil",
    lName:"Dev",

}

//dry -> do not repeat yourself 
// crick2.welcome() -> error

let welcomeFn=crick1.welcome;
welcomeFn()
//if there was a way in which i can point my this to crick2/crick3

// this-> crick2 and then my welcomeFn will be called 
let cfn=welcomeFn.call(crick2,"chikucholebhature@gmail.com",38,"music","eating","fitness")
console.log(cfn);


//apply-> same as call , takes array of arguments

let fn=welcomeFn.apply(crick3,["spinnygoogly@gmail.com",42,"dance","paint","fitness"])
console.log(fn);

//bind -> same as call , but returna function which can be called as per our need

const bindedFn=welcomeFn.bind(crick4,"kd83@gmail.com",60);
console.log(bindedFn);
bindedFn()

