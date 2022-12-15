import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './assets/styles/GlobalStyles';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);

