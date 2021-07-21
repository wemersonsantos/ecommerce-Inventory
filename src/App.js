import React from 'react';
import Routes from './routes';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}