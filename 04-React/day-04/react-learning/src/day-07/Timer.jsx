import { useEffect } from "react";
function Timer(){
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("running")
        },1000);
    
    return()=>{
        clearInterval(interval);
    }
},[]);
    return(
        <>
        <h4>Timer</h4>
        </>
    );
}
export default Timer;