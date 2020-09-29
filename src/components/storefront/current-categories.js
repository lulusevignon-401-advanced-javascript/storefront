import React from 'react';
import { connect } from 'react-redux';

function CurrentCategory(props){

  return(
    <h1>
      Current Category {props.activeCategory}
    </h1>
  )
}
const mapStateToProps = (state) =>{
  return {
    activeCategory: state.products.activeCategory,
  }
}

// const mapDispatchToProps = 

export default connect(mapStateToProps)(CurrentCategory);
