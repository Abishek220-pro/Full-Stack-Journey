function homework(callback){
    setTimeout(()=>{
        console.log("i finished the home work");
        callback();
    },3000);
}

function bikeride(callback)
{
    setTimeout(()=>{
        console.log("hihihi to i the long ride in my bike");
        callback();
    },1000)
}
homework(()=>{
    bikeride(()=>{
        console.log("you finished all work");
    });
});