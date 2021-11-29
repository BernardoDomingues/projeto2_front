import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const LoginContext = React.createContext({});

export const LoginProvider = ({ children }) => {
  const [formState, setFormState] = useState("login");
  const [loginAuth, setLoginAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  console.log(loginAuth, userData);

  const readCookie = () => {
    const user = Cookies.get("user");
    const cookiesUserData = Cookies.get("userName");
    if (user) {
      setLoginAuth(true);
      setUserData(cookiesUserData);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        formState,
        setFormState,
        loginAuth,
        setLoginAuth,
        setUserData,
        userData
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
