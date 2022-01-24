import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.scss';
import { GlobalStyles } from 'twin.macro';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
