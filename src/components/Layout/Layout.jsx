import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import classnames from "classnames";
import logo from "./MyLogo.jpg";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Icons from "../Icons/Icons";
import Footer from "../Footer/Footer";
import loginStyle from "./Layout.module.less";
// import Icons from "./Icons";

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
          Ant Design is the most influential web design specification in Xihu
          district
        </div>
        <div className={loginStyle.loginSignUp}>
          <Link
            to="/login"
            className={loginStyle.content}
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={loginStyle.content}
            style={{ textDecoration: "none" }}
          >
            Signup
          </Link>
        </div>
        {/* <Login className={classnames({ [loginStyle.loginForm]: true })} /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect path="/login" />
        </Switch>
        <Icons />
      </div>

      <Footer />
    </>
  );
}
