import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContext, firebaseContext } from './Context/FirebaseContext'
import { BrowserRouter } from 'react-router-dom';
import { app } from './Firebase/Config'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <firebaseContext.Provider value={{ app }}>
        <UserContext>
          <App />
        </UserContext>
      </firebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
