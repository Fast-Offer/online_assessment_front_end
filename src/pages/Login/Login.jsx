import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import classnames from 'classnames';
// import { useHistory } from 'react-router-dom';
import loginStyle from './Login.module.less';
import Icons from './Icons/Icons';
import Footer from '../../components/Footer/Footer';
import LoginAndRegisterHeader from '../../components/LoginAndRegisterHeader/LoginAndRegisterHeader';
import openNotification from '../../components/Notification/Notification';

const axios = require('axios');

export default function Login() {
  const requestUrl = '/login';
  // const history = useHistory();

  const onFinish = (values) => {
    axios.post(requestUrl, values)
      .then((response) => {
        const resStatus = response.data.status;
        const errorMessage = response.data.msg;

        if (resStatus !== 200) {
          openNotification('error', resStatus, errorMessage);
          localStorage.setItem('isAuth', false);
        }

        if (resStatus === 200) {
          localStorage.setItem('isAuth', true);
          // history.push('/lib');
          window.location.href = '/lib';
        }
      })
      .catch((error) => {
        if (error.response) {
          // eslint-disable-next-line
          console.log(error.response);
          // ***********************************************************
          // NOTE:
          // (1) You may need modify the following 2 lines of code,
          // due to different format error.response from the server...
          // (2) After errorType & errorMessage != null or undefined,
          // the notification will behave normally again...
          // ***********************************************************
          const errorType = error.response.data.status;
          const errorMessage = error.response.data.error;
          // Invoke Notification
          openNotification('error', errorType, errorMessage);
        }
      });
  };

  return (
    <div
      className={classnames({
        container: true,
        [loginStyle.login]: true,
      })}
    >
      <LoginAndRegisterHeader />
      <div className={loginStyle.mainTitle}>
        {/* <img src={logo} alt="logo" className={loginStyle.logo} /> */}
        <h2 className={loginStyle.title}>Online Assessment</h2>
      </div>

      <div className={loginStyle.annotation}>
        Online Assessment-Powerful Self-Examination System in AU
      </div>
      <div>
        <Form
          name="normal_login"
          className={classnames({
            'login-form': true,
            // [loginStyle.loginForm]: true,
          })}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            // className={loginStyle.email}
            style={{ marginBottom: '23px' }}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
              {
                type: 'email',
                message: 'Please input a valid Email address...',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            // className={loginStyle.password}
            style={{ marginBottom: '23px' }}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className={loginStyle.remember}>Remember me</Checkbox>
            </Form.Item>
            <a
              className={classnames({
                'login-form-forgot': true,
                [`${loginStyle.forgot}`]: true,
              })}
              href="/login"
              disabled="disabled"
            >
              Forgot your password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classnames({
                'login-form-button': true,
                [`${loginStyle.signIn}`]: true,
              })}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Icons />
      <Footer />
    </div>
  );
}
