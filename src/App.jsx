import React from 'react';
import './App.module.less';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <Router>
    <AuthProvider>
      <div className="APP">
        <AppRoutes />
      </div>
    </AuthProvider>
  </Router>
);
export default App;
