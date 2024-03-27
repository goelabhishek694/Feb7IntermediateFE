let person={
    name:"Peter",
    age:30
}

let handler={
    get(target,key){
        console.log("target-> ",target,"key-> ",key);
        if(key in target){
            return target[key]
        }
        else throw Error("property not found")
    },
    set:function(target,key,value){
        if(key=="name") {
            console.log("cannot alter name property");
            return
        }
        return target[key]=value.toUpperCase()
    }
}

let proxyObj=new Proxy(person,handler);

//get request
console.log(proxyObj.name)
// console.log(proxyObj.fullName)

//set request
proxyObj.lname="InterviewBit"
proxyObj.name="Scaler"

person.name="scaler"
