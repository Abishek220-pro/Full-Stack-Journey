import {useState} from "react";
function Name()
{
    const[name,setName]=useState("Abishek");
    const[index,setIndex]=useState(0);
    const[nn,setnn]=useState(["diva","santhosh","madhan","prince","srihari"]);
    const[newName,setNewName]=useState("");
    return(
        <>
        <h3>Name:{name}</h3>
        <h2>Name :{nn[index]}</h2>
        <button onClick={()=>setName("Vijay")}>
            change name
        </button>
        <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="Enter the namae "/><br/>
        <br/>

        <button onClick={()=>setName("thalapathi")}>change name 2 </button><br/>
        <br/>
        <button onClick={()=>setIndex((index+1)%nn.length)}>Next name </button>
        <br/>
        <br/>
        <button onClick={()=>{setnn([...nn,newName]);setNewName("")}}>Add Name</button>
        </>
    );
}
export default Name;