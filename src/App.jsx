import React from 'react';
import './App.module.less';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Register from './pages/Register/Register';
import Redo from './pages/Redo/Redo';
import Fav from './pages/Fav/Fav';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/redo" component={Redo} />
        <Route path="/Fav" component={Fav} />
      </Switch>
    </Router>
  );
}

export default App;
