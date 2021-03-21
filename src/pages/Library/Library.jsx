/* eslint-disable no-console */
import React from 'react';
import 'antd/dist/antd.css';
// import './Layout.module.less';

import {
  Layout,
  Menu,
} from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsDisplay from '../../components/CardDisplay/CardDisplay';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const {
  Header,
  Content,
  Footer,
  Sider,
} = Layout;
// const { SubMenu } = Menu;

class LibraryLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  // onCollapse = (collapsed) => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Library
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Redo Quizs
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Favorites
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              My Result
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined />}>
              Account
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <SearchBar />
            <NavigationBar />
            <CardsDisplay />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LibraryLayout;