import React from 'react';
import './App.css';
import CurrentCategory from './components/storefront/current-categories';
import Header from './components/header/header';

import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Header />
    <CurrentCategory/>
    <Footer />
    </>

  );
}

export default App;
