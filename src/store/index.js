import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../store/cart.js';

const store = configureStore({
  reducer: { cart: cartReducer },
});


export default store;