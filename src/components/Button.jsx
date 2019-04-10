import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  caption: PropTypes.string,
};

const defaultProps = {
  onClick: () => {},
  className: 'btn-default',
  caption: 'Missing button caption',
};

const Button = ({ onClick, className = '', caption }) =>
  (
    <button onClick={onClick} className={className} type="button">
      {caption}
    </button>
  );

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
