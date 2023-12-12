
function doubleMe(x:number);
function doubleMe(x:string);
function doubleMe(x:string[]);

function doubleMe(x:any){
    
    if (x && typeof x === "number") {
        console.log(x * 2);
    } else if (x && typeof x === "string"){
        console.log(x + " " + x);
    } else if (Array.isArray(x)){
        return x.map(name =>console.log(name));
    }
}

doubleMe(2);
doubleMe("Shree");
doubleMe(['d']);



var product = function(...nums){

    var result = 1;
    for (let i = 0; i < nums.length; i++) {

        console.log(nums[i]);
        result*=nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));






