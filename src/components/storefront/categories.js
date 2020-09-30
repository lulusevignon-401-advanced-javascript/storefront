import React, { useEffect, useCallback } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { category } from '../../store/categories'

const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {
  console.log('my props', props.categories)
  // TODO: get props from redux store
  

  const classes = useStyles();

  return (
   
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.category(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    categories: state.categories,
    // activeCategory: state.categories.activeCategory,
  }
}

const mapDispatchToProps = { category }
// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
