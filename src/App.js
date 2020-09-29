import React from 'react';
import './App.css';
import Categories from './components/storefront/categories.js';
import CurrentCategory from './components/storefront/current-categories';
import Products from './components/storefront/products.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
      <Header />
      <main>
        <Categories />
        <CurrentCategory />
        <Products />
      </main>
      <Footer />
    </>

  );
}

export default App;
