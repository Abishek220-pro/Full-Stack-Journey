import { useMemo } from "react";
import { useState } from "react";
function EX1(){
    const[count ,setcount]=useState(0);
    const marks=[80,90,45,30,50];
    const total =useMemo(()=>{
        return marks.reduce((sum,mark)=>{
            return sum+mark;
        },0);
    },[]);
    return(<>
    <h1>Count:{count}</h1>
    <h2>Total mark:{total}</h2>
    <button onClick={()=>setcount(count+1)}>Increase</button>
    </>);


}
export default EX1;