import "./App.css";
import Expression from "./componebts/Expression";
import Arithmetic from "./componebts/Arithmetic";
import Fun from "./componebts/Fun";
import Login from "./componebts/Login";
import List from "./componebts/List";
import Uniqueid from "./componebts/Uniqueid";
import Photo from "./componebts/Photo";
function App(){
    return(
      <div className="container">
        <h1 className="hello"> this my portfolio</h1>
        <p>tamil nadu chief minister our thalapathi vijay anna </p>
        <button>Contect Me</button>
        <Expression/>
        <Arithmetic/>
        <Fun/>
        <Login/>
        <br/>
        <List/>
        <br/>
        <Uniqueid/>
        <br/>
        <Photo/>
      </div>
      
    ); 
}
export default App;