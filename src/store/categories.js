// //define initial state
import axios from 'axios';

// const initialState = {categories: [], activeCategory: ''};

// //define reducer
// export default function categoryReducer (state = initialState, action){
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








// import superagent from 'superagent';

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
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategoryList(response.data.results));
};

// Not publishing the internal action, only the thunk'd one
export const { category, setCategoryList } = categorySlice.actions

export default categorySlice.reducer