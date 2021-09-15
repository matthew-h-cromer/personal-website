import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SinglePage from './components/pages/SinglePage/SinglePage.js';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(
  <React.StrictMode>
    <SinglePage />
  </React.StrictMode>,
  document.getElementById('root')
);
