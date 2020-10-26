// //define initial state
// import axios from 'axios';

// const initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//   ],
//   products: [
//   //   { name: 'Monitor', category: 'electronics', price: 699.00, inStock: 5 },
//   //   { name: 'Mouse', category: 'electronics', price: 99.00, inStock: 15 },
//   //   { name: '1 TB USB', category: 'electronics', price: 75.00, inStock: 23 },
//   //   { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//   //   { name: 'carrots', category: 'food', price: 1.99, inStock: 120 },
//   //   { name: 'Calzones', category: 'food', price: 4.39, inStock: 90 },
//   ],
//   activeCategory: 'electronics'

// }

// //define reducer
// export default (state = initialState, action) =>{
//   let {type, payload} = action;

//   switch (type) {

//     case 'CATEGORY':

//     return {...state, activeCategory:payload}

//     default:
//       return state;
//   }
// } 

// // define action creators / action objs
// export function category(name){

//   return async function(dispatch) {
//     const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
//     dispatch({
//       type: 'CATEGORY',
//       payload: response.data.results,
//     })
    
//   }
// }

import superagent from 'superagent';

import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: '',
    categoryList: []
  },
  reducers: {
    category(state, action) {
      state.activeCategory = action.payload
    },
    setCategoryList(state, action) {
      state.categoryList = action.payload
    }
  }
})

export const getCategories = () => async dispatch => {
  let response = await superagent.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategoryList(response.body.results));
};

// Not publishing the internal action, only the thunk'd one
export const { category, setCategoryList } = categorySlice.actions

export default categorySlice.reducer