import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import products from './products';
import categories from './categories';


let reducers = combineReducers({ products, categories });

const store = () =>{
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
