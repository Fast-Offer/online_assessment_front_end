import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';

const AuthenticatedRoutes = ({ children, path, exact }) => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (authContext.isAuthenticated === 'true' ? <>{children}</> : <Redirect to="/login" />)}
    />
  );
};

export default AuthenticatedRoutes;
