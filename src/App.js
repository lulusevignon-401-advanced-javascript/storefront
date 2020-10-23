import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Categories from './components/storefront/categories.js';
import CurrentCategory from './components/storefront/current-categories';
import Product from './components/storefront/products.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
// import Storefront from './components/storefront/storefront.js';
// import Cart from './components/cart/checkout.js';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
      <Header />
      <main>
      <Route exact path="/" component={Storefront} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </main>
      <Footer />
    </>

  );
}

export default App;
