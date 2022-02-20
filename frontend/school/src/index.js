import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthcontextProvider } from './Context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AuthcontextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthcontextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
