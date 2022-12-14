import React from 'react';
import ReactDOM from 'react-dom/client';
import './main/index.css';
import './main/cards.css';
import './main/signIn.css';
import './main/navbar.css';
import './main/header.css';
import './main/userCourses.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<React.StrictMode>
   <App />
</React.StrictMode>
</BrowserRouter>
);
