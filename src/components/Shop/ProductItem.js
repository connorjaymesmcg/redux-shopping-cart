import Card from '../UI/Card';
import classes from './ProductItem.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const ProductItem = (props) => {
  const totalCartItems = useSelector(state => state.cart.totalCartItems);
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const dispatch = useDispatch();

  const { title, price, description } = props;

  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(cartActions.addCartItem());
    dispatch(cartActions.sendProductData(1));
    console.log(cartProducts);
  };



  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
