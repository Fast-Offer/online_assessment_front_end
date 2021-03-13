import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
import logo from './MyLogo.jpg';
import Login from '../../pages/Login';
import Icons from '../Icons';
import Footer from '../Footer';
import loginStyle from './Layout.module.less';

export default function Layout() {
  return (
    <>
      <div
        className={classnames({
          container: true,
          [loginStyle.login]: true,
        })}
      >
        <div className={loginStyle.mainTitle}>
          <img src={logo} alt="logo" className={loginStyle.logo} />
          <h2 className={loginStyle.title}>Online Assessment</h2>
        </div>

        <div className={loginStyle.annotation}>
          Online Assessment-Powerful Self-Examination System in AU
        </div>
        <div className={loginStyle.loginSignUp}>
          <Link
            to="/login"
            className={loginStyle.content}
            style={{ textDecoration: 'none' }}
          >
            Login
          </Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Icons />
        <Footer />
      </div>
    </>
  );
}
