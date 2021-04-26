import React from 'react';
import { Switch } from 'react-router-dom';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/UnauthenticatedRoutes';
import Redo from '../../pages/Redo';
import Fav from '../../pages/Fav';
import Lib from '../../pages/Library';
import Account from '../../pages/Account';
import Error from '../../pages/Error/Error';
import Mock from '../../pages/Mock/Mock';

const AppRoutes = () => (
  <Switch>
    <AuthenticatedRoutes path="/lib">
      <Lib />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/redo">
      <Redo />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/fav">
      <Fav />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/error">
      <Error />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/account">
      <Account />
    </AuthenticatedRoutes>
    <AuthenticatedRoutes path="/mock">
      <Mock />
    </AuthenticatedRoutes>
    <UnauthenticatedRoutes />
  </Switch>
);

export default AppRoutes;
