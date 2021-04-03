import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../../../pages/Login/Login';
import Register from '../../../../pages/Register/Register';


const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route exact path="/">
      <div>Landing Page</div>
    </Route>
    <Route path="*">
      <div>404 Error Page</div>
    </Route>
  </Switch>
);

export default UnauthenticatedRoutes;
