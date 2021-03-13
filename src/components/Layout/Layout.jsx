import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
// import logo from './MyLogo.jpg';
import Login from '../../pages/Login';
import Icons from '../Icons';
import Footer from '../Footer';
import loginStyle from './Layout.module.less';
import Register from '../../pages/Register/Register';
import LoginAndRegisterHeader from '../LoginAndRegisterHeader/LoginAndRegisterHeader';

export default function Layout() {
  return (
    <>
      <LoginAndRegisterHeader />
      <div
        className={classnames({
          container: true,
          [loginStyle.login]: true,
        })}
      >
        <div className={loginStyle.mainTitle}>
          {/* <img src={logo} alt="logo" className={loginStyle.logo} /> */}
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
          <Link
            to="/register"
            className={loginStyle.content}
            // style={{ textDecoration: 'none' }}
          >
            Register
          </Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Icons />
        <Footer />
      </div>
    </>
  );
}
