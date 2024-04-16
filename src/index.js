import React, { createContext } from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App';
import UserRequest from './store/userRequest';
import UserStore from './store/userStore'
export const Context = createContext(null) 
 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
  <React.StrictMode> 
  <Context.Provider value = {{ 
    user: new UserStore(),
    UserRequest: new UserRequest()}}> 
    <App/>
  </Context.Provider>    
  </React.StrictMode> 
);