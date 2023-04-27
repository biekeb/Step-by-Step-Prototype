import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/style.css';
import Input from './components/input';
import Course from './components/courses';
import Confirm from './components/confirm'
import Page from './pages/page'
import Confirmation from './components/confirmations'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
    <Course />
    <Confirm />
    <Confirmation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
