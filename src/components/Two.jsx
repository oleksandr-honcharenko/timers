/* eslint-disable */
import React from 'react';

const Button = ({ onClick, className = '', children }) =>
  (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );

const Loading = () =>
  <div>Загрузка ...</div>;

const withLoading = ComponentLoaded => ({ isLoading, ...rest }) => {
  if (isLoading) {
    return <Loading />;
  }
  return <ComponentLoaded {...rest} />;
};

// вроде норм пример на батоне без состояния через ХОК

const ButtonWithLoading = withLoading(Button);

export default ButtonWithLoading;
