//define initial state

const initialState = {
  activeCategory: 'electronics',


}

//define reducer
export default (state = initialState, action) =>{
  const{type, payload} = action;

  switch(type){
    default:
      return state;
  }
} 



// define action creators / action objs