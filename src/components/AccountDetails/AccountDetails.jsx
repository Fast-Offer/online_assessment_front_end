import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import AccountDetailsStyled from './AccountDetails.module.less'

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AccountDetails = () => {
  const onFinish = (values) => {
    // eslint-disable-next-line
    console.log(values);
  };

  return (
    <div className={AccountDetailsStyled.container}>
    <Form 
    /* eslint-disable react/jsx-props-no-spreading */
    {...layout}
    className="site-layout-background mt-3"
    style={{
      backgroundColor:"white",
      padding:'45px 20px'
    }}
     name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="User Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="Phone" rules={[
          {
            message: 'Please input your phone number!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'location']} label="Location">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'selfIntroduction']} label="Self Introduction">
        <Input.TextArea style={{height:'200px'}}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default AccountDetails;