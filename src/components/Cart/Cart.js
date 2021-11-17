import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector, useReducer, useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const Cart = (props) => {
  const totalCartItems = useSelector(state => state.cart.totalCartItems);
  const cartIsOpen = useSelector(state => state.cart.cartIsOpen);

  return (
    <div>
      {cartIsOpen && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }} />
          </ul>
        </Card>
      )
      }
    </div>
  );
};

export default Cart;
