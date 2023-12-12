// compound assignment operator
console.log("// compound assignment operator");
var x = 50;
var y = 50 * 100;
var z = x + y;
console.log(z);
var p = 25;
p += 25;
console.log(p);
// comparison operator
console.log("// comparison operator");
var n = 40;
console.log(n == 30);
// logical operator
console.log("// logical operator");
console.log((10 > 20) && (20 > 5));
console.log((10 > 20) || (4 > 5));
console.log(!(10 > 20) || (20 > 5));
// ternary operator
console.log("// ternary operator");
var num1 = 20;
var num2 = 30;
console.log((num1 > num2) ? "num1 is greater than num2" : "num1 is less than num2");
// object De-Structuring
console.log("// object De-Structuring");
var student = {
    fname: 'jack',
    score: 90
};
var fname = student.fname;
// Array De-Structuring
console.log("// Array De-Structuring");
var course = ['Angular', "ReactJS", 'VueJS'];
course.push('.Net');
for (var index = 0; index < course.length; index++) {
    var element = course[index];
    console.log(element);
}
var a = course[0], b = course[1], c = course[2], d = course[3];
console.log("Array De-Structuring", a, b, c, d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
function display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log("Id : ".concat(id));
    console.log("Name : ".concat(name));
    console.log("Role : ".concat(role));
}
display(101, "Dada");