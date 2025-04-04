import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import PrivateCabinetLogin from './Components/PrivateCebinet/PrivateCabinetLogin';
import PrivateCabinetParent from './Components/PrivateCebinet/PrivateCabinetParent';
import Transfer from './Components/Transfer/Transfer';
import PrivateCabinetRegister from './Components/PrivateCebinet/PrivateCabinetRegister';

export default function Application() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Products />} />
        <Route path='/private-cabinet/login' element={<PrivateCabinetLogin />} />
        <Route path='/private-cabinet/registration' element={<PrivateCabinetRegister />} />
        <Route path='/private-cabinet/' element={<PrivateCabinetParent />} /> 
        <Route path='/money-transfer/' element={<Transfer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);