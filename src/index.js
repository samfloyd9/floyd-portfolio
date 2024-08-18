import { NavigationProvider } from './context/navigation';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
