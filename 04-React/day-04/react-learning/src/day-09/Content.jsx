import{useContext} from "react";
import { themeContext } from "./App";
function Content(){
    const {theme}=useContext(themeContext);
    return <p>Current theme:{theme}</p>
}
export default Content;