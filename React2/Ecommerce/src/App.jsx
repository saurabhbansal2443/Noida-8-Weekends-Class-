import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ThemeController from "./utils/ThemeController";

function App(){
  return (
    <ThemeController>
    <Navbar></Navbar>
   <Outlet></Outlet>
    </ThemeController>
  )
} 

export default App ;
