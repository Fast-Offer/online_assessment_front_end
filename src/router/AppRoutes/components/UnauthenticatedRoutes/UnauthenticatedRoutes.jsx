import React from 'react';
import { Route, Switch } from 'react-router-dom';

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/login">
      <div>Login Page</div>
    </Route>
    <Route path="/signup">
      <div>Signup Page</div>
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
