//Asynchromous code 
console.log("First ")
setTimeout(()=>{
    console.log("Second");
},2000)
console.log("Third");

// Promise ;
const promise = new Promise((resolve,reject)=>{
    resolve("Finished");
});
promise.then((result)=>
{
    console.log(result);
});

// await 
function Hi(){
    return new  Promise((resolve)=>{
        console.log("hi...hi.. vijay anna ");
    },2000);
}

async function fetchdata(){
    const result = await Hi();
    console.log(result);
}
fetchdata();

// Error Handling with try catch


function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("iam waiting...");
        },4000);
    });
}
async function fetchdata(){
    try{
        const result = await getData();
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }

}

fetchdata();