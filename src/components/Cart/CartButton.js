import classes from './CartButton.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const totalCartItems = useSelector((state) => state.cart.totalCartItems);
  const cartIsOpen = useSelector(state => state.cart.cartIsOpen);

  const dispatch = useDispatch();

  const cartIsEmpty = totalCartItems <= 0;

  const toggleCart = (e) => {
    e.preventDefault();
    if (!cartIsOpen && !cartIsEmpty) {
      dispatch(cartActions.toggleCart(true));
    }
    if (cartIsOpen && !cartIsEmpty) {
      dispatch(cartActions.toggleCart(false));
    }
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      {!cartIsEmpty && <span className={classes.badge}>{totalCartItems}</span>}
    </button>
  );
};

export default CartButton;
