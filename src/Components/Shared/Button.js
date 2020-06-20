import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = props => (
  <button
    className='btn'
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
