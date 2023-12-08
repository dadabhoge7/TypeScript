// we can create array in diff ways

let arr1: boolean [] = [];
let arr2: Boolean [] = new Array();
let arr3: boolean [] = Array();
let arr4: Array<boolean> = [];
let arr5: Array<boolean> = new Array();
let arr6: Array<boolean> = Array();

// Homogenous Array
var homeArr: Array<string> = ["Angular", "JavaScript", "ReactJS"];

for (const key in homeArr) {
  console.log(`By Using in :-${homeArr[key]}`);
}

for (const iterator of homeArr) {
    console.log(`By Using off :-${iterator}`);
}


// hetrogenous array

var hetroArr: Array<any> = ["Kantara", "12345", 123456, true];
console.log(hetroArr);



