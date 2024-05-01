import React from 'react';
import ReactDOM from 'react-dom/client';
import App_xx from './App_02.jsx';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={1500} />
    <App_xx />
  </React.StrictMode>
);
