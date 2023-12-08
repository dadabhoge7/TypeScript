var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
})(gender || (gender = {}));
console.log(gender);
console.log(gender.Male);
console.log(gender.Female);
console.log(gender[0]);
console.log(gender[1]);
// customized index number
var weekEnd;
(function (weekEnd) {
    weekEnd[weekEnd["saturday"] = 6] = "saturday";
    weekEnd[weekEnd["sunday"] = 7] = "sunday";
})(weekEnd || (weekEnd = {}));
console.log(weekEnd.saturday); //0
console.log(weekEnd.sunday); //1
