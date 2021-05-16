// addItemToCart function takes as arguments cartItems and
// cartItemToAdd then it checks if the item already exists using
// find, and if it already exists then create a new array of cartItems
// using map and for the id that matches add 1 to the quantity.
// if it doesn't exist then create a new object with quantity value
// of 1
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// removeItemFromCart function takes as arguments cartItems and
// cartItemToRemove.  It checks to see if the item exists in the cart
// using find, and if the quantity of the item is 1 then take the item
// out by using filter.  If there is > 1 quantity then create a new array
// using map and for the id that matches decrease the quantity by 1.
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
