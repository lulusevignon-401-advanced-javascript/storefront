// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import products from './products';
// import categories from './categories';


// let reducers = combineReducers({ products, categories });

// const store = () =>{
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// };

// export default store();

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import products from './products.js';
import categories from './categories.js';
import cart from './cart.js'

const reducer = combineReducers({ products, categories, cart });

const store = configureStore({ reducer });

export default store;
