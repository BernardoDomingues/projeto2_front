import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Singin from './containers/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} key="/" />
        <Route exact path="/sobre" component={About} key="/sobre" />
        <Route exact path="/entrar" component={Singin} key="/entrar" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
