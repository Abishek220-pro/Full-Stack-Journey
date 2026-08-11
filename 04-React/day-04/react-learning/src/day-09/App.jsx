import { createContext,useContext,useState} from "react";
import Header from "./Header";
import Content from "./Content";
import ToggleButton from "./ToggleButton";
export const themeContext = createContext();
function App(){
    const[theme,setTheme]=useState("light");
    const toggletheme=()=>{
        setTheme(theme==="light"?"dark":"light");
    };
    return(
        <><themeContext.Provider value={{theme,toggletheme}}>
        <Header/>
        <Content/>
        <ToggleButton/>
    </themeContext.Provider>
        </>
    );
    
}
export default App;