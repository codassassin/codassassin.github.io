import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApplicationContextProvider } from './context/ApplicationContext';

// document.addEventListener('contextmenu', event => {
//   event.preventDefault();
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <App />
    </ApplicationContextProvider>
  </React.StrictMode>
);

reportWebVitals();