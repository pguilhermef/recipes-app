import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppReceitasProvider from './context/AppReceitasProvider';
import App from './App';

ReactDOM.render(
  <AppReceitasProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppReceitasProvider>,
  document.getElementById('root'),
);
