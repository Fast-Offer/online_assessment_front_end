import React from "react";
import { Form, Input, Select, Row, Col, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import classnames from "classnames";
import loginStyle from "../Login/Login.module.less";

const { Option } = Select;

export default function Signup() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="61">+61</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        initialValues={{
          prefix: "61",
          remember: true,
        }}
      >
        <Form.Item
          className={loginStyle.username}
          name="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
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
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            placeholder="Phone number"
          />
        </Form.Item>

        <Form.Item extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: "Please input the captcha you got!",
                  },
                ]}
              >
                <Input placeholder="Validation code" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get Validation</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={classnames({
              "login-form-button": true,
              [`${loginStyle.signIn}`]: true,
            })}
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
