import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/home';
import Reservas from './routes/reservas';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
