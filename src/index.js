import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// FONT
import "@fontsource/dm-sans";

// COMPONENT
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar/>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
