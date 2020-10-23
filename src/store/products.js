//define initial state

const initialState = {
  // categories: [
  //   { name: 'electronics', displayName: 'Electronics' },
  //   { name: 'food', displayName: 'Food' },
  // ],
  products: [
    { name: 'Monitor', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Mouse', category: 'electronics', price: 99.00, inStock: 15 },
    { name: '1 TB USB', category: 'electronics', price: 75.00, inStock: 23 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'carrots', category: 'food', price: 1.99, inStock: 120 },
    { name: 'Calzones', category: 'food', price: 4.39, inStock: 90 },
  ],
  activeProduct: [],

}

//define reducer
export default (state = initialState, action) =>{
  let {type, payload} = action;

  switch (type) {

    case 'PRODUCT':

    return {...state, activeProduct:payload}

    default:
      return state;
  }
} 

// define action creators / action objs
export const products = name =>{
  return {
    type: 'PRODUCT',
    payload: name,
  }
}