import { useState,useCallback,useMemo } from "react";
function App(){
    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Hello");
    },[]);
    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>{handleClick}}>Say Hello</button>
        </>
    );

}
export default App;