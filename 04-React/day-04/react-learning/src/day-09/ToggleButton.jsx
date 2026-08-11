import { useContext } from "react";
import { themeContext } from "./App";
function ToggleButton(){
    const{toggletheme}=useContext(themeContext);
    return <button onClick={toggletheme}>Toggle Theme</button>
}
export default ToggleButton;