import React from 'react';
import { connect } from 'react-redux';
import { products } from '../../store/products'
import { categories } from '../../store/categories'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = props => {


  props = {
    store: {
      products: [
        {
          name: 'name',
          category: 'electronics',
          description: 'description',
        }
      ],
      activeCategory: 'electronics',
    }
  }

  const classes = useStyles();

  // const products = props.products.filter(product => product.category === props.activeProduct)

  const products = props.store.products.filter(product => product.category === props.store.activeCategory)

  return (
    // <ul>
    //   <li>
    //     Hello
    //     {props.products.length}
    //   </li>
    // </ul>,
  <>
       <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
           {products.map((product) => (
             <Grid item key={product.name} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                   image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                   </Typography>
                   <Typography>
                    {product.description}
                  </Typography>
                 </CardContent>
                 <CardActions>
                  <Button size="small" color="primary">
                   Add To Cart
                  </Button>
                  <Button size="small" color="primary">
                   View Details
                  </Button>
               </CardActions>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>
    </>
  );

}

const mapStateToProps = (state) =>{
  return {
  Product: state.products.products,
  activeProduct: state.products.activeProduct,
  }
}


// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps)(Products);

// export default Products;




