import {useState} from "react";
import "./App.css";
import Name from "./compound/Name";
function App() {
    const[count,setCount]=useState(0);
    return(
        <> <h1>
        <center>Day 4</center></h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)} >Increse</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <Name/>
        </>
    );
    
   
}

export default App;