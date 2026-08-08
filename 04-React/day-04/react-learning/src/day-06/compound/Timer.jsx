import{useState} from "react";
import { useEffect } from "react";
function Timer()
{
    const[second,setSecond]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setSecond(prev=>prev+1);
        },2000);
    
    return()=>
    {
        clearInterval(timer);

    };
    },[]);
    return(
        <>
        <h1>timer:{second}</h1>
        </>
    );
}
export default Timer;