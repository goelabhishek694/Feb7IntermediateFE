console.log(Number.MAX_SAFE_INTEGER);
// is the maximum number that can be printed in js w/o compromising on it's precision
console.log(Number.MAX_SAFE_INTEGER+0.5);
//9 quadrillion -> 2^53-1

// bigint-> n is added at the last. 
//2^63-1
//1st way
const bigIntValue=11234567892345678n;
console.log(90071992547409910);
//2nd way
const anotherBigIntValue=BigInt(90071992547409910);
console.log(anotherBigIntValue);

console.log(typeof bigIntValue);
console.log(typeof 10);
//operations 
let add=bigIntValue+10n;
console.log(add);
let num=10;
console.log(bigIntValue>num);

const largeNumber=12345678901234567890890n;
const str=BigInt("98765432109609876543210");

const product=largeNumber*str;
//this has more precision
console.log(product);
//this has less precision
console.log(12345678901234567890890*98765432109609876543210);



