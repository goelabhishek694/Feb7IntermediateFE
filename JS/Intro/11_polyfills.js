//polyfills -> create implementation of a function which is needed by us .

// eg we ned a function sum which gives us the sum of al the numbers passed 
// sum(arr)

// 2010-> call and apply 
// 2012 -> bind method was introduced 

let crick1={
    fName:"Kapil",
    lName:"Dev",
    // welcome:function (email,age,...args){
    //     console.log(`Welcome ${this.fName} ${this.lName}
    //     Email ${email}
    //     Age ${age} ${args}`);
    // }
}
// let welcome=100;
// crick1.welcome=welcome;
// crick1.welcome();

function welcome(email,age,...args){
    console.log(`Welcome ${this.fName} ${this.lName}
    Email ${email}
    Age ${age} ${args}`);
}
// console.log(crick1);

welcome.call(crick1,"kd83@gmail.com",60)


Function.prototype.myCall=function(obj,...args){
    console.log(this);
    let welcomeFn=this;
    console.log(obj);
    console.log(args);
    obj.fn=welcomeFn;
    console.log(obj);
    obj.fn(...args) //method 
    delete obj.fn
}






welcome.myCall(crick1,"kd83@gmail.com",60,"eating") //method call 
// this-> welcome 

console.log(crick1);

Function.prototype.myApply=function(obj,args){
    console.log(this);
    let welcomeFn=this;
    console.log(obj);
    console.log(args);
    obj.fn=welcomeFn;
    console.log(obj);
    obj.fn(...args) //method 
    delete obj.fn
}

welcome.myApply(crick1,["kd83@gmail.com",60,"eating"])

//polyfill for bind 

Function.prototype.myBind=function(obj,...args){
    let welcomeFn=this;
    return function(){
        welcomeFn.call(obj,...args)
    }
}

let bindedFn=welcome.myBind(crick1,"kd83@gmail.com",60,"eating");
bindedFn();

var data = "b" + "a" + + "a" + "a";
console.log(data);
console.log(data.toLowerCase())




