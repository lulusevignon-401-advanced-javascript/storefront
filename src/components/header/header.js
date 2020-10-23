import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: '#f5f5f5',
    color: "#111",
  },
  appBar: {
    zIndex: 1000
  },
}));

const Header = props => {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs>
          <Button component={Link} to="/">
            <Typography variant="h4">
              Our Store
            </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
