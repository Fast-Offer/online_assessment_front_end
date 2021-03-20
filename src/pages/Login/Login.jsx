import React from 'react';
import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import loginStyle from './Login.module.less';

export default function Login() {
  const onFinish = (values) => {
    // eslint-disable-next-line
    console.log('Received values of form: ', values);
  };
  return (
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
          className={loginStyle.email}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          className={loginStyle.password}
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
  );
}
