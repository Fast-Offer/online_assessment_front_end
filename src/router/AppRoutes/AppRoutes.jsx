import React from 'react';
import { Switch } from 'react-router-dom';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/UnauthenticatedRoutes';

const AppRoutes = () => (
  <Switch>
    <AuthenticatedRoutes path="/dashboard">
      <div>dashboard</div>
    </AuthenticatedRoutes>
    <UnauthenticatedRoutes />
  </Switch>
);

export default AppRoutes;
