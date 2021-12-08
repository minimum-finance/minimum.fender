import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import VaultReducer from './Reducers';

const store = createStore(VaultReducer);

const render = () => ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppLayout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
