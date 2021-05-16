import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal
} from './cart.utils';

// the context will contain the hidden
// toggleHidden function, carItems, addItem
// function, removeItem function, clearItemFromCart
// function, cartItemsCount, and cartTotal
export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0
});

// cartprovider has 4 states that it needs to keep track of,
// hidden, cartItems, cartItemsCount, and cartTotal. 
// the addItem function calls the addItemToCart function
// the removeItem function calls the removeItemFromCart function
// the toggleHidden function sets hidden to the opposite state
// the clearItemFromCart function calls the filterItemFromCart function
// setCartItemsCount and setCartTotal will need to be within a useEffect
// hook because it needs to be updated when cartItems is updated, not
// directly interacted by the user.
// the return contains the CartContext.Provider wrapper with the values
// hidden,toggleHidden,cartItems,addItem,removeItem,clearItemFromCart,
// cartItemsCount, cartTotal around a children value.
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
