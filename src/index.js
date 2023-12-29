import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlayProvider } from './contexts/Play';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayProvider>
    <App />
    </PlayProvider>
  </React.StrictMode>
);
