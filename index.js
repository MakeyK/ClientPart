import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore'
export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <Context.Provider value = {{
    user: new UserStore()
    }}>

    <App />
  </Context.Provider>,

    
  </React.StrictMode>
);
