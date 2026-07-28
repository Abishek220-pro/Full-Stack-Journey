const mypomise = new Promise((resolve,reject)=>
{
    let a =10;
    if(a%2==0)
    {
        resolve("operation success");
    }
    else{
        reject("operation failed");
    }
})
mypomise.then((result)=>
{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})