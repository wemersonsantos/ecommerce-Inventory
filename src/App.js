import React from 'react';
import Routes from './routes';
import Hearder from './pages/Hearder';
import Footer from './pages/Footer';

import './App.css';

export default function App() {
  return (
    <>
      <Hearder />
      <Routes />
      <Footer />
    </>
  );
}