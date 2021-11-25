/* 
1.variable value is not defined
2.function but didn't write return anything
3.just wrote return but didn't return anything
4.parameter that  didn't you have passed
5.property that doesn't exist in object
6.accessing array element out of range
7.accessing deleting array element 
8.explicitly set value undefined
*/

let first;
// console.log(first);

function second(x,y){
    const sum = x+y;
}
// console.log(second(1,2));
function add(a,b){
    const sum = a+b;
    if(b<10){
        return;
    }
}
// console.log(add(1,2))

function double(a,b){
    const result = a*2;
    // console.log(b)
    return result;
}
double(1)

const fifth ={name:"sagir",age:25, location:"khulna"};
// console.log(fifth.phone)

const sixth =[4,2,1,5,4];
// console.log(sixth[5])

delete sixth[2];
// console.log(sixth[2])

const seventh = undefined;
// console.log(seventh);

const myObj ={name:"imran",age:null}

//null is something that didn't exist 
