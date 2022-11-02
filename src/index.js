import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

const uris = ['https://bee-volunteers-backend.herokuapp.com', 'http://localhost:3001']
axios.defaults.baseURL = uris[0];


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


