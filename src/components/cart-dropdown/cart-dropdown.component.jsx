import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './cart-dropdown.styles.scss';

// cartdropdown component gets the cartItems and toggleHidden
// function from the CartContext
// it returns the list of cartitems if it is not empty, else it will
// display the message "your cart is empty".  Then it will have a custom
// button with a onclick event for /checkout.
const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
