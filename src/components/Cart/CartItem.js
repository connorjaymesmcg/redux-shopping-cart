import classes from './CartItem.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const CartItem = (props) => {
  const totalCartItems = useSelector((state) => state.cart.totalCartItems);
  const itemTotal = useSelector((state) => state.cart.itemTotal);
  const dispatch = useDispatch();

  const { title, quantity, total, price } = props.item;


  const incrementItem = () => {
    dispatch(cartActions.incrementItemCount());
  };

  const decrementItem = () => {
    dispatch(cartActions.decrementItemCount(
    ));
  };

  return (
    <li className={classes.item}>
      {totalCartItems > 0 && (
        <div>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>
              ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{itemTotal}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={decrementItem}>-</button>
              <button onClick={incrementItem}>+</button>
            </div>
          </div>
        </div>
      )
      }
    </li>
  );
};

export default CartItem;
