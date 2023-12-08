// Number
var x: number;
x=101;
console.log(x);
// now transpile the ts code to js ===> tsc 
const myNum = '3';
console.log(2 + parseInt(myNum));

// String
var s1: string = "You are the creater of your destiny";
var s2: string = `powerful people come from powerful places`;
console.log(s1);
console.log(s2);

// Boolean
var b1:boolean =  true;
var b2:boolean = false;
var b3:boolean ;

console.log(b1);
console.log(b2);    

function test(){
    return b3 = true;
    console.log(b3);// no execute --> because return stop the execution for next line// false
}
console.log(test());//true // undefined---> no return any value


// Any

let firstName: any = "Dada";
firstName = 101;
firstName = true;
console.log(`Any DataType firstName :- ${firstName}`);

let iAmNotSure;
iAmNotSure = 101;
iAmNotSure = 'CodeMind';
console.log(`Any DataType iAmNotSure :- ${iAmNotSure}`);

// object

var objProduct : any = {
    productID : 1,
    productName : "iPhone",
    productPrice : 100000
}
console.log(objProduct);








