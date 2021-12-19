import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import { deleteUser } from "services/users";

export const LoginContext = React.createContext({});

export const LoginProvider = ({ children }) => {
  const [formState, setFormState] = useState("login");
  const [loginAuth, setLoginAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  const delUser = () => {
    deleteUser(userData.id);
    Cookies.remove("user");
    Cookies.remove("userData");
    setLoginAuth(false);
    setUserData([]);
  };

  const readCookie = () => {
    const user = Cookies.get("user");
    const cookiesUserData = Cookies.get("userData");
    if (user) {
      setLoginAuth(true);
      setUserData(JSON.parse(cookiesUserData));
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
        userData,
        delUser,
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
