import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles/GlobalStyles';
import App from './components/App';
import "./assets/fonts/fonts.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);

