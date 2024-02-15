import {Routes,Route} from "react-router-dom"
import './App.css';
import Login from "./Pages/authentication/Login";
import SignUp from "./Pages/authentication/SignUp";

function App() {
  return (
    <Routes>
     <Route path={"/Login"} element={<Login/>}/>
     <Route path={"/SignUp"} element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
