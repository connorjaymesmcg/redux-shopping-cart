import ProductItem from './ProductItem';
import classes from './Products.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="Test" price={6} description="This is the first product - amazing!" />
        <ProductItem title="Test Product 2" price={100} description="This is the second product - less amazing!" />
        <ProductItem title="Test Product 2" price={1} description="This is the third product - terrible!" />
      </ul>
    </section>
  );
};

export default Products;
