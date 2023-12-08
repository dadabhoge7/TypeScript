// we can create array in diff ways
var arr1 = [];
var arr2 = new Array();
var arr3 = Array();
var arr4 = [];
var arr5 = new Array();
var arr6 = Array();
// Homogenous Array
var homeArr = ["Angular", "JavaScript", "ReactJS"];
for (var key in homeArr) {
    console.log("By Using in :-".concat(homeArr[key]));
}
for (var _i = 0, homeArr_1 = homeArr; _i < homeArr_1.length; _i++) {
    var iterator = homeArr_1[_i];
    console.log("By Using off :-".concat(iterator));
}
// hetrogenous array
var hetroArr = ["Kantara", "12345", 123456, true];
console.log(hetroArr);
