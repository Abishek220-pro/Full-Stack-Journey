// import{useState} from "react";
// function App(){
//   const[state,setState]=useState(initialValue);
//}
import './App.css'
import AA1 from "./component/AA1";
import Com1 from "./component/Com"
import {useState} from "react";
function App() {
  console.log("Compund Rendered");
  const[count,setCount]=useState(0);
  const[name,setName]=useState("Abishek");
  const[islogin,SetIsLogin]=useState(false);
  const[fruits,setFruits]=useState(["Apple","Orange"]);
  const[user,setUser]=useState({name:"Abishek",age:20});
  const[city,setCity]=useState("Salem")
  
  return (
    <>
       <h3>count={count}</h3>
       <h2>{name}</h2>
       <h2>{islogin.toString()}</h2><br/>
       <br/>
       <h1>{city}</h1>
       <button onClick={()=>setCount(count+1)}>Increse</button>
       <button onClick={()=>setName("vijay anna")}>Name change button</button>
       <button onClick={()=>SetIsLogin(true)}>chnage true value</button>
       <button onClick={()=>setCity("poolampatti")}>change place</button>
       <AA1/>
       <Com1/>
    </>
  );
}

export default App
