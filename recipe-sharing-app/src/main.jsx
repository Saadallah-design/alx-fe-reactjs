
import './index.css'
import App from './App.jsx'

import ReactDOM from 'react-dom/client';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Rendering the App component, which now contains all routing */}
    <App /> 
  </React.StrictMode>,
);
