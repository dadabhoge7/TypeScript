var sn;
sn = "Dada";
sn = 12345;
sn = true;
console.log(sn);
// function print (arg : string | number){
//     console.log(arg);
//     if (typeof arg == 'number') {
//         console.log(arg + 2);
//     } else {
//         console.log(arg+ " "+ 'test');
//     }
// }
// print("CodeMind");
// print(1234);
function test(arg) {
    if (typeof arg == 'number') {
        console.log(arg + 2);
    }
    else {
        console.log(arg + " " + 'Test');
    }
}
test('CodeMind');
test(2);
