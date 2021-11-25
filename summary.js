const a= "alim uddin";
const b= 21;
const c= true;
//null
//undefine

// primitive type:string,boolean,number,null,undefined,symbol
// non primitive type:object

const nums =[23,21,25,3];
// console.log(Array.isArray(nums))

function triple(x,y,z){
x=11;
y=52;
z=15;
}
// console.log(typeof triple);
// console.log(triple.length);
const num1 = 3;
const num2 = 5;
const num3 = 7;
triple(num1, num2, num3)
console.log(num1,num2,num3)
// console.log(typeof null)
//function is an object primitive chara sob kichu object


function objectsx (x,y,z){
    x.age=888;
}
const myObj = {name:"imran",age:20};
objectsx(myObj);
console.log(myObj);