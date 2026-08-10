import { useRef } from "react";
function Input()
{
    const inputRef = useRef("");
    const Name =()=>{
        name.current;
        console.log(inputRef.current);
    };
    return(
        <>
        <input  placeholder= " enter the name " type="text"ref={inputRef}/>
        <button>Type the name </button>
        </>
    );
}
export default Input;