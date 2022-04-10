import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import AppProvider from './AppContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const block = require('bem-css-modules');
// block.default.setSettings({ modifierDelimiter: '--' })

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();