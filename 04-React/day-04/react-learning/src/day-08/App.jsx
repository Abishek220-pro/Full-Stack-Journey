import {useRef} from "react";
import "./App.css";
import Input from "./compound/Input";
function App(){
    const inputRef = useRef(0);
    const increase =()=>{
        inputRef.current++;
        console.log(inputRef.current);
    };
    return(
        <>        <button className="a1" onClick={increase}>Increase</button>
        <br/>
        <br/>
          <Input/>
        </>
    )
    
}
export default App;