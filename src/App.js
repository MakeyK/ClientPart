import { BrowserRouter } from "react-router-dom"; 
import AppRouter from "./components/AppRouter";  
import NavBar from "./components/NavBar"; 
import NavBar2 from "./components/NavBar2"
import LowerNavBar from "./components/LowerNavBar";
//import NavBaar_niz from "./components/NavBar1"
function App() { 
  return ( 
    <BrowserRouter> 
      {/* <NavBar2/> */}
    <LowerNavBar/>
      <NavBar/>
      <AppRouter/> 
      
    </BrowserRouter> 
  ); 
} 
//<NavBaar_niz/>

export default App;