const add =(a,b)=>{
    return a+b;
};
console.log(add(5,6));

const square = num=>num*num;
console.log(square(7));


function greet(name="you enter the your name"){
    console.log("hello"+name);
}
greet("Tvk vijay anna ");
greet("Abishek");


let name = "Abishek";
function show(){
    console.log(name);
    let age =10;
    console.log(age);
}
show();



const message = function(){
    console.log("anonymous function");
}
message();
