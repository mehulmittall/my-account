import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
 
axios.defaults.withCredentials = true;
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
);
