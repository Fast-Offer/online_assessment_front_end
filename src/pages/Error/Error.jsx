import React from 'react';
import {
  Layout, Breadcrumb, Form, Button, Input, Typography, Alert,
} from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation/SideNavigation';

const Error = () => {
  const { Title } = Typography;
  const { Content, Header } = Layout;

  const HEADER_AREA = {
    display: 'block',
    margin: '20px 16px 10px 16px',
    paddingTop: 23,
    paddingLeft: 115,
    minWidth: 480,
    height: 120,
    backgroundColor: 'white',
  };
  const CONTENT_AREA = {
    margin: '10px 16px',
    marginBottom: '16px',
    paddingLeft: 115,
    padding: '24px 115px',
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

  const InfoDescription = '这里头应该写啥？？';
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
            <Title level={2}>
              Please describe as much details about the error as possible
            </Title>
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
            </Form>
            <Button type="button" style={BUTTON_STYLE}>Click to submit</Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
};

export default Error;
