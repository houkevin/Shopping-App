import React from 'react';

import './cart-item.styles.scss';

// cartitem component has argument of item which contains the
// imageUrl, price, name, and quantity of the item.  It returns
// the image of the cart item, then the name of the item, and then
// the quantity x price of the item.
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
