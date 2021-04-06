import React from 'react';
import {
  Layout, Breadcrumb, Form, Button, Input, Typography,
} from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import CountdownTimer from '../../components/CountdownTimer';

const Error = () => {
  const { Title } = Typography;
  const { Content, Header } = Layout;
  const HEADER_AREA = {
    width: 1050,
    height: 120,
    margin: '10px 16px',
    padding: 24,
    backgroundColor: 'white',
  };
  const CONTENT_AREA = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    width: 1050,
    height: 720,
    margin: '10px 16px',
    marginBottom: '16px',
    padding: '24px 24px',
    minHeight: 280,
    backgroundColor: 'white',
  };
  const INPUT_FIELD = {
    width: 795,
    height: 330,
    display: 'block',
    margin: '0px auto',
    marginTop: '20px',
    padding: '2px',
    border: '.15rem solid lightgrey',
    resize: 'both',
  };
  const BUTTON_STYLE = {
    display: 'block',
    margin: '10px auto 10px',
    border: '1px solid red',
    borderRadius: 5,
  };
  const H2_TITLE = {
    align: 'center',
  };

  return (
    <Layout>
      <MainHeader />
      <Layout>
        <SideNavigation />
        <Layout>
          <Header
            style={HEADER_AREA}
            breakpoint="lg"
            collapsedwidth="700"
          >
            <Breadcrumb style={{ margin: '6px 1px' }}>
              <Breadcrumb.Item>Library</Breadcrumb.Item>
              <Breadcrumb.Item>[Test Name Here]</Breadcrumb.Item>
              <Breadcrumb.Item>Practice Mode</Breadcrumb.Item>
              <Breadcrumb.Item>Error Page</Breadcrumb.Item>
            </Breadcrumb>
            <Title level={3}>Report Error</Title>
          </Header>

          <Content style={CONTENT_AREA}>
            <Title level={2} style={H2_TITLE}>
              Please describe as much details about the error as possible
            </Title>
            <Form name="Error Submission" initialValues={{ remember: false }}>
              <Form.Item>
                <Input.TextArea style={INPUT_FIELD} />
                <Button type="button" style={BUTTON_STYLE}>Button text here, DO NOT click</Button>
              </Form.Item>
            </Form>
            <CountdownTimer hour={1} min={3} sec={3} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Error;
