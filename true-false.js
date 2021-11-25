/* 
falsy:
false
0 is falsy
empty string is falsy
undefined is falsy
null is falsy
NaN is falsy

-----------------------------------------------------
truthy:
true;
any positive or negative number is truthy
any string including single white space,"0","false","true"
[]
anything else that isnot falsy it will be truthy
*/
// const x ="true";
let x ={};
console.log("value of x:",x)
if(x){
    console.log("vriable is truthy");
}
else{
    console.log("vaiable is falsy");
}