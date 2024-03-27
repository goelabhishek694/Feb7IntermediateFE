const mySymbol=Symbol();
const myObj={};
myObj[mySymbol]="unique";
console.log(myObj[mySymbol]);

myObj.mySymbol="hello";
console.log(myObj);

const str1="hello";
const str2="hello";
//;primitve 
console.log(str1==str2);

const arr1=[1,2,3]
const arr2=[1,2,3]

//non primitve
console.log(arr1==arr2);

const s1=Symbol("description");
const s2=Symbol("description");

const person={
    name:"Scaler",
    age:10,
    [s1]:"A person"
}

console.log(person[s1]);
console.log(person[s2]);
console.log(person["description"]);
console.log(person.s1);
console.log(person[s1]);

console.log(s1==s2);

// 2nd usecase

// to create  a private variable 

console.log(Object.keys(person));
for(let key in person){
    console.log(key);
}