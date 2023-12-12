// compound assignment operator
console.log(`// compound assignment operator`);
var x = 50;
var y = 50*100;
var z = x + y ;
console.log(z);


var p = 25;
p += 25;
console.log(p);

// comparison operator
console.log(`// comparison operator`);
var n:number = 40;
console.log(n == 30);

// logical operator
console.log(`// logical operator`);
console.log((10>20) && (20>5));
console.log((10>20) || (4>5));
console.log(!(10>20) || (20>5));

// ternary operator
console.log(`// ternary operator`);
var num1 : number =20;
var num2: number = 30;
console.log((num1>num2)?"num1 is greater than num2":"num1 is less than num2");

// object De-Structuring
console.log(`// object De-Structuring`);
var student = {
    fname : 'jack',
    score : 90
}
var {fname} = student;

// Array De-Structuring
console.log(`// Array De-Structuring`);
let course : any = ['Angular',"ReactJS",'VueJS'];
course.push('.Net');
for (let index = 0; index < course.length; index++) {
    const element = course[index];
    console.log(element);
}

var [a,b,c,d] = course;
console.log(`Array De-Structuring`,a,b,c,d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);


function display(id : number , name : string , role : string = "Guest User"){
console.log(`Id : ${id}`);
console.log(`Name : ${name}`);
console.log(`Role : ${role}`);
}
display(101, "Dada");
display(102, "Shree", "Admin");







