import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.sass';

import AppProvider from './store/AppContext';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
