let initialState={
  cartItemps : [],
  initialPrice: '$$',
}

export default(state=initialState, action) =>{

  const {type, payload} = action;

  switch(type){
    case 'ADDTOCART':
    let totalCartItemps = state.initalCart+1;

    return totalCartItemps;

    case 'RESET':
      return initialState;

    default: 
    return state;
  }
}

export const addToCart = product =>{
  return{
    type: 'ADDTOCART',
    payload:product,
  }
}

export const resetCart = name =>{
  return{
    type:'RESET',
    payload: name,
  }
}