import React from 'react';
import './App.module.less';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Register from './pages/Register/Register';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Layout />
      </Switch>
    </Router>
  );
}

export default App;
