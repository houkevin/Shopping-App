import React from 'react';

import './form-input.styles.scss';

// the formInput component takes as arugment an object containing
// handleChange, label, and otherProps.  It returns an input form
// where it contains a label that is null if the label doesn't exist.
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
