/* kuno ekta functioner parameter hisebe jodi kuno function newa hoi and main functioner vitor thak call kora hoi tahole tak call back function bole */

function welcomeMessage(name,greetHandler){
    greetHandler(name);
}

function greetMorning(name){
    console.log("good morning",name);
}
function greetAfternoon(name){
    console.log("good afternoon",name);
}
function greetEvening(name){
    console.log("good Evening",name);
}
 welcomeMessage("tom",greetMorning);
 welcomeMessage("jerry",greetAfternoon);
 welcomeMessage("lovely",greetEvening);
