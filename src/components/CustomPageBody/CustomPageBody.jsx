import React from 'react';
import {
  Layout, Form, Input, Typography, Alert, Button, Radio, Space, Pagination,
} from 'antd';
import { StarTwoTone, QuestionCircleTwoTone } from '@ant-design/icons';

const CONTENT_AREA = {
  margin: '10px 16px',
  marginBottom: '16px',
  paddingLeft: 55,
  padding: '24px 55px',
  height: 700,
  minHeight: 280,
  minWidth: 480,
  backgroundColor: 'white',
};

const INPUT_FIELD = {
  width: '100%',
  height: 330,
  margin: '0px auto',
  marginTop: '20px',
  padding: '2px',
  border: '.15rem solid lightgrey',
  resize: 'both',
};

const INFO_STYLE = {
  margin: '20px 0px',
  width: '100%',
  height: 120,
};

const BUTTON_STYLE = {
  display: 'block',
  margin: '0px auto',
  borderRadius: 5,
  color: 'white',
  backgroundColor: '#ff6666',
  fontWeight: 'bold',
};

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const InfoDescription = '这里头应该写啥？？';

const CustomPageBody = ({ page }) => {
  const { Content } = Layout;
  const { Title } = Typography;

  const QUESTION_TITLE = ' Below which answer best describes the Java History? ';

  const ERROR_THEME = (
    <Form name="Error Submission" initialValues={{ remember: false }}>
      <Form.Item>
        <Input.TextArea style={INPUT_FIELD} />
        <Alert
          message="Info Text"
          description={InfoDescription}
          type="info"
          style={INFO_STYLE}
        />
      </Form.Item>
      <Button type="button" style={BUTTON_STYLE}>
        Click to submit
      </Button>
    </Form>
  );

  const PRACTICE_THEME = (
    <div>
      <Title style={{ textAlign: 'center', paddingTop: '50px' }} level={2}>
        {QUESTION_TITLE}
      </Title>
      <Space size={45} width="100%" style={{ textAlign: 'center' }}>
        <Radio.Group style={{
          display: 'block', width: '500px', minHeight: '400px', margin: '0 auto', paddingTop: '30px',
        }}
        >
          <Radio style={radioStyle} value={1}>
            Option Answer A
          </Radio>
          <Radio style={radioStyle} value={2}>
            Option Answer B
          </Radio>
          <Radio style={radioStyle} value={3}>
            Option Answer C
          </Radio>
          <Radio style={radioStyle} value={4}>
            Option Answer D
          </Radio>
        </Radio.Group>
      </Space>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
        <Space size={25} align="center">
          <span>
            <StarTwoTone />
            favorite
          </span>
          <span>
            <QuestionCircleTwoTone />
            report error
          </span>
        </Space>
        <Space size={25} align="center">
          <Button type="button">Check</Button>
          <Button type="button">Finish</Button>
        </Space>
      </div>
      <Pagination style={{ textAlign: 'center' }} defaultCurrent={1} total={32} />
    </div>
  );

  let activeTheme;

  switch (page) {
    case 'Error':
      activeTheme = ERROR_THEME;
      break;
    case 'Practice':
      activeTheme = PRACTICE_THEME;
      break;
    default:
      activeTheme = page;
  }

  return (
    <Content style={CONTENT_AREA}>
      { activeTheme }
    </Content>
  );
};

export default CustomPageBody;
