// addItemToCart function will first find if the item exists
// if it does then return a new array using map and add 1 to the
// quantity of the found item.
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

// removeItemFromCart function finds if the item exists
// if it does and the quantity is 1, then it will filter the item
// out from the array.  If it does exist and quantity > 1 then
// it will return a new array with the quantity - 1
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

// filterItemFromCart will return array of items that don't have
// the given item id
export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.id !== item.id);

// getCartItemsCount will return the total number of
// items in the cart by using the reduce array function
export const getCartItemsCount = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );

// getCartTotal will return the total price of the items in the
// cart by using the reduce array function.
export const getCartTotal = cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
