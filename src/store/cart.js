import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  totalCartItems: 0,
  cartProducts: [],
  itemTotal: 0,
  cartIsOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCartItem(state) {
      state.totalCartItems++;
    },
    sendProductData(state, action) {
      return {
        ...state,
        cartProducts: [...state.cartProducts.push(action.payload)],
      };
    },
    incrementItemCount(state) {
      state.itemTotal++;
    },
    decrementItemCount(state) {
      state.itemTotal--;
    },
    toggleCart(state, action) {
      state.cartIsOpen = !state.cartIsOpen + action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
