import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// the carticon component gets toggleHidden function and cartItemsCount
// from the CartContext.  The cart div will use toggleHidden and will 
// be around ShoppingIcon component.  After the shoppingicon component
// will be the cartItemsCount
const CartIcon = ({ itemCount }) => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
