import React from 'react';

import './custom-buttom.styles.scss';

// the custombutton component passes the object containing
// the children, isGoogleSignIn, inverted and the other props

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
