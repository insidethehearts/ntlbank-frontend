import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);