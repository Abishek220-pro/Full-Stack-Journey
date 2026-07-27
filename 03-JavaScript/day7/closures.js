function counter()
{
    let count =0;
    return function()
    {
        count++;
        return count;
    }
}
const increment = counter();
console.log(increment());

console.log(increment());console.log(increment());console.log(increment());console.log(increment());
let a ="10";
if(a==="10"){
    console.log("true");
}
else{
    console.log("false");
}