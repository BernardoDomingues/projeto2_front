import React from "react";
import Home from "./containers/Home";
import About from "./containers/About";
import Singin from './containers/Singin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/entrar">
          <Singin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
