import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter basename='contacts-manager-app'>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)