import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#eee',
    padding: theme.spacing(1),
  },
}));

const Footer = props => {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2020 Lulu Sevignon
        </Typography>
  
    </footer>
  );
}

export default Footer;
