import { useEffect,useRef } from "react";
import{useState} from "react";
import Timer from "./Timer";
import Clock from "./Clock";
function App(){
    const[show,setshow]=useState(true);
    return(
        <>
        {show &&<Timer/>}
        <button onClick={()=>setshow(false)}>Stop Timer</button>
        {show && <Clock/>}
        </>
    )
}export default App;