import React from 'react';
import {
  Layout, Breadcrumb, Form, Button, Input, Typography, Alert,
} from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import CountdownTimer from '../../components/CountdownTimer';
import Footer from '../../components/Footer';

const Error = () => {
  const { Title } = Typography;
  const { Content, Header } = Layout;

  const LAYOUT_STYLE = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const HEADER_AREA = {
    width: 1050,
    height: 120,
    margin: '20px 16px',
    padding: 24,
    backgroundColor: 'white',
  };
  const CONTENT_AREA = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
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
    maxWidth: 1024,
    display: 'block',
    margin: '0px auto',
    marginTop: '20px',
    padding: '2px',
    border: '.15rem solid lightgrey',
    resize: 'both',
  };
  const INFO_STYLE = {
    margin: '20px 0px',
    width: 795,
    height: 120,
  };
  const BUTTON_STYLE = {
    display: 'block',
    margin: '0px auto',
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#FF7C9E',
    fontWeight: 'bold',
  };

  const InfoDescription = '这里头应该写啥？？';
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <SideNavigation />
        <Layout style={LAYOUT_STYLE}>
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
          <CountdownTimer style={{ display: 'inline' }} hour={1} min={1} sec={1} />
        </Layout>
      </Layout>
      <Footer />
    </Layout>

  );
};

export default Error;
