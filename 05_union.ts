var sn : string | number | boolean ;
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

function test(arg : number | string) : number | string {

    if (typeof arg== 'number') {
        console.log(arg + 2);
        return 1;
    } else {
        console.log(arg + " " + 'Test');
        return "";
    }
}
test('CodeMind');
test(2);