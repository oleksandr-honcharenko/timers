// /* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
};

const defaultProps = {
  onClick: PropTypes.func,
  className: 'btn-default',
  children: 'Missing button caption',
};

const Button = ({ onClick, className = '', children }) =>
  (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
