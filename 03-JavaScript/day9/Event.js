// Event LOOP:
console.log("A");
setTimeout(()=>{
    console.log("B");
},2000);
console.log("C");

// Microtask Queue vs Callback Queue:

console.log("A");
setTimeout(()=>{
    console.log("B");
},0);

Promise.resolve().then(()=>{
    console.log("C");
});
console.log("D");

// async /await :
console.log("Start");
async function test(){
    console.log("Inside");
    await Promise.resolve();
    console.log("After Await");

}  
test();
console.log("End");
