import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = (props) => (
  <div className='display'>
    <div className='input'>
      { props.input }
    </div>
    <div className='total'>
      { props.total }
    </div>
  </div>
)

Display.propTypes = {
  input: PropTypes.string.isRequired,
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Display;
