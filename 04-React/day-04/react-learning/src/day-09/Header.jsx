import {useContext} from "react";
import { themeContext } from "./App";
function Header(){
    const {theme}=useContext(themeContext);
    return <h1>My App({theme} mode)</h1>
}
export default Header;