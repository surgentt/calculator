import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => (
  <div className='display'>
    { props.input }
  </div>
)

Display.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Display;
