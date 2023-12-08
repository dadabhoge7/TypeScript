// Number
var x;
x = 101;
console.log(x);
// now transpile the ts code to js ===> tsc 
var myNum = '3';
console.log(2 + parseInt(myNum));
// String
var s1 = "You are the creater of your destiny";
var s2 = "powerful people come from powerful places";
console.log(s1);
console.log(s2);
// Boolean
var b1 = true;
var b2 = false;
var b3;
console.log(b1);
console.log(b2);
function test() {
    return b3 = true;
    console.log(b3); // no execute --> because return stop the execution for next line// false
}
console.log(test()); //true // undefined---> no return any value
// Any
var firstName = "Dada";
firstName = 101;
firstName = true;
console.log("Any DataType firstName :- ".concat(firstName));
var iAmNotSure;
iAmNotSure = 101;
iAmNotSure = 'CodeMind';
console.log("Any DataType iAmNotSure :- ".concat(iAmNotSure));
// object
var objProduct = {
    productID: 1,
    productName: "iPhone",
    productPrice: 100000
};
console.log(objProduct);
