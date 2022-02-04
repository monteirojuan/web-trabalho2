import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/home';
import NovaReserva from './routes/novaReserva';
import Reservas from './routes/reservas';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path={"/reservar/:id"} element={<NovaReserva />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
