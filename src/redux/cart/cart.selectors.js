import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// selectCartItems is a selector that uses selectCart
// function to get cartItems.
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// selectCartHidden is a selector that uses selectCart
// function to get hidden items from cart
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// selectCartItemsCount uses selectCartItems selector
// to get the sum of the quantity of the cartItems
// using reduce
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// selectCartTotal uses selectCartItems selector
// to get the total price of the cartItems using
// reduce
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
