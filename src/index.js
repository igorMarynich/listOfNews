import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateContext from './context/StateContext'

ReactDOM.render(
  <StateContext>
    <App />
  </StateContext>,
  document.getElementById('root')
);