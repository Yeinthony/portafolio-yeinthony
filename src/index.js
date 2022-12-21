import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const w = window;
const d = document;

w.onload = function () {
  d.querySelector('#loader').classList.add('ocultar');
  d.querySelector('.hidden').classList.remove('hidden');
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


