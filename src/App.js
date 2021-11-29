import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { useLogin } from "providers/login";

import Home from "containers/Home";
import About from "containers/About";
import Singin from "containers/Login";
import Error from "containers/Error";
import Profile from "containers/Profile";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/perfil" />)}
    />
  );
};

const App = () => {
  const { loginAuth } = useLogin();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} key="/" />
        <Route exact path="/sobre" component={About} key="/sobre" />
        <ProtectedLogin path="/login" auth={loginAuth} component={Singin} />
        <ProtectedRoute path="/perfil" auth={loginAuth} component={Profile} />
        <Route exact path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
