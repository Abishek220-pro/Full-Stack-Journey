import { useEffect } from "react";
import{useState} from "react";
import Timer from "./compound/Timer";
function App()
{
    const[count,setcount]=useState(0);
    useEffect(()=>{
            document.title="this is my web page";
            console.log("count changed:",count)
           
    },[count]);
    return(<>
          <h1>Hello world</h1>
          <h3>count:{count}</h3>
          <button onClick={()=>setcount(count+1)}>Increase</button>
          <button onClick={()=>setcount(0)}>Reset</button>
          <Time/>
    </>);
}
export default App;