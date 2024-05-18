import React from "react";
import  ReactDOM from "react-dom/client";
import AppContainer from "./Containers/AppContainer";
import 'bootstrap/dist/css/bootstrap.min.css'

// React Slick CSS Files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AppContainer />
    </React.StrictMode>
)