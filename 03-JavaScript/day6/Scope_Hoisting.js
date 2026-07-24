// Global scope :
let name = "thalapathi vetri kondan";
function tvk(){
    console.log(name);
}
tvk();
console.log(name);

// Function Scope :
function test(){
    var name1="Abishek";
    console.log(name1);
}
test();
// Block Scope:

if(40>=20)
{
    let age = 40;
    let name = "vijay anna";
    console.log(age);
    console.log(name);
}
// Hoisting
var  x ;
x=10;
console.log(x);


// function hositing:
let y=10;
function greet(){
    console.log(y);
}
    
greet();
