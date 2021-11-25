/* ekta functioner vitore jodi rekta function return kori and function er vitorer variable k tokhon reference dore ekta private value dore   nijosso  closure ba encapsulation toiri kore reference value barai but bahoire thak ei value k access kora jia nah */

function stopwatch(){
    let counter =0;
    return function(){
        counter++;
        return;
    }
}
let clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());