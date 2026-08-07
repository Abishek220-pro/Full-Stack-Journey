import { useState } from "react";
import Counter from "./compound/Counter";
import CounterB from "./compound/CounterB";
import NameInput from "./compound/NameInput";
import Age from "./compound/Age";
import Preview from "./compound/Preview";
function App(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    const handlenameChange=(value)=>setName(value);
    const handleageChange=(value)=>setAge(value);
    return(
        <>
               <Counter count={count} onIncrement={increment}/>
               <br/>

               <CounterB count ={count} onDecrement={decrement}/>   
               <br/>      
               <NameInput name={name} onNameChange={handlenameChange}/>
               <Age age={age} onAgeChange={handleageChange}/>
               <Preview name={name} age={age}/>
         </>
    );
}
export default App;