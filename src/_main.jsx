import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import App from '@app/App.jsx';

import store from '@app/store.js';

// !REQUIRED! - import the project main style sheet
import '@ui/style/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);