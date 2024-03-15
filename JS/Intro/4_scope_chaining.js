var b=10;
function a(){
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);

var a = 5; 
function fun () { 
    console.log(a); 
    var a = 10; 
}
fun();

// MA
// global 
// a:undefined
// fun: f{...}

// CE
// global 
// a:5
// fun: f{...}

// local 
// MA : 
// a:undefined

// CE : 
// a:10




