/* 
local scope can't be used in global scope;
global scope can be used in local scope;
let & const will be in block scope;
var will create hoisting and let , const will not do it;
if let,var,const is not used , it will be global like implicit global or global leaking;
if variable is declared in function it will be accessed only in function;
block scope is let and const variable

 */

const favnum =27;//global variable

function add(first,second){
    const result = first + second;//local scope
    // console.log(favnum);;//global scope
    // console.log(mood)//hoisting
    if(result > 9){
     let  mood ="happy";//block scope in case of for & while loop,if,else, else if in case of let,const but not var
        mood ="cranky"
        console.log(mood)
    }
    // console.log(mood)
    return result;
    
}
const sum = add(10,12);
console.log(sum);
// console.log(mood);

for(var i=0; i < 10; i++){

}
console.log(i);
