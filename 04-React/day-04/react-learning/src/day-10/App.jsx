import { useMemo } from "react";
import { useState } from "react";
import EX1 from "./EX1";
function App(){
    const[count,setcount]=useState(0);
    const number =0;
    const result = useMemo(()=>{
        console.log("calculating.....");
        return number * 2;
    },[]);
    return(
        <>
        <h1>count:{count}</h1>
        <h2>Result:{result}</h2>
        <button onClick={()=>setcount(count+1)}>Increase</button>
        <EX1/>
        </>
    );
}
export default App;