import React from 'react';
import { Switch } from 'react-router-dom';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/UnauthenticatedRoutes';
import Redo from '../../pages/Redo';
import Fav from '../../pages/Fav';
import Lib from '../../pages/Library';

const AppRoutes = () => (
  <Switch>
    <AuthenticatedRoutes path="/dashboard">
      <Lib />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/redo">
      <Redo />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/fav">
      <Fav />
    </AuthenticatedRoutes>
    <UnauthenticatedRoutes />
  </Switch>
);

export default AppRoutes;
