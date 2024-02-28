import { BrowserRouter } from "react-router-dom"; 
import AppRouter from "./components/AppRouter";  
import NavBar from "./components/NavBar"; 
//import NavBaar_niz from "./components/NavBar1"
function App() { 
  return ( 
    <BrowserRouter> 
      <NavBar/>
      <AppRouter/> 
      
 
    </BrowserRouter> 
  ); 
} 
//<NavBaar_niz/>

export default App;