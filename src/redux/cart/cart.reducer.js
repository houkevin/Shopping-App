import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

// the inital state of the cart, which is
// initially hidden and has empty cartItems
// array
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

// the cart reducer has a toggle_cart_hidden
// type which will switch the state of the previous
// hidden component,  add_item which will call the
// addItemToCart function, remove_item which will
// call the removeItemFromCart function, and
// the clear_item_from_cart action which filters
// out the item from the array.  the default option
// is to just return the state.
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
