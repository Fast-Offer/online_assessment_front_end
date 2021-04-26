import React from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
// import SecondHeader from '../../components/SecondHeader/SecondHeader';
import Question from './components/Question';
import './Mock.module.less';

const Mock = () => {
  const { Title } = Typography;
  const { Header } = Layout;

  const HEADER_AREA = {
    display: 'block',
    margin: '20px 16px 10px 16px',
    paddingTop: 23,
    paddingLeft: 75,
    minWidth: 480,
    height: 120,
    backgroundColor: 'white',
  };
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <SideNavigation />
        <Layout>
          {/* <SecondHeader title="ANZ Code Testing Set" subtitle="just test" /> */}
          <Header
            style={HEADER_AREA}
            breakpoint="lg"
            collapsedwidth="700"
          >
            <Breadcrumb style={{ margin: '6px 1px' }}>
              <Breadcrumb.Item>Library</Breadcrumb.Item>
              <Breadcrumb.Item>ANZ Code Testing Set</Breadcrumb.Item>
              <Breadcrumb.Item>Mock Test</Breadcrumb.Item>
            </Breadcrumb>
            <Title level={3}>ANZ Code Testing Set</Title>
          </Header>
          <Question />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Mock;
