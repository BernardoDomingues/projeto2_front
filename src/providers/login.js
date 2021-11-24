import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = React.createContext({});

export const LoginProvider = ({ children }) => {
  const [formState, setFormState] = useState('login');
  return (
    <LoginContext.Provider value={{
      formState,
      setFormState,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useLogin = () => React.useContext(LoginContext);
