import { useEffect } from "react";
function Clock(){
    useEffect(()=>{
        const timeing = setInterval(()=>{
console.log(new Date().toLocaleTimeString());
        },1000);
        return()=>{
            clearInterval(timeing);
        }

    },[]);
    return <h4>clock</h4>

}
export default Clock;