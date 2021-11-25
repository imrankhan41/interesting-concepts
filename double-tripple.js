/* 
== check only value;
here true =1
false =0
it converts any "1","0","2" into number and true value into number.As it convert itself to check value to be sure equal or not so it is called implicit coersion or conversion.

primitive type can be checked using == & ===
--------------------------------------------------
=== check types & values
array or object can be checked using loop through or from object using class

*/


const first = "0";
const second =false;
if(first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
//more conparison

// const a = {name:"ali"};
// const b = {name:"ali"};
const a=[];
const b =[];
if(a===b){
    console.log("both are same")
}
else{
    console.log("they are not same")
}