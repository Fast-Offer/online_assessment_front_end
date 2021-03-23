import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined, AppstoreAddOutlined, HeartOutlined, BarChartOutlined, HistoryOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

const SideNavigation = () => (
  <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['library']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="library" icon={<AppstoreAddOutlined />}>
        <NavLink to="./dashboard">Library</NavLink>
      </Menu.Item>
      <Menu.Item key="redo" icon={<HistoryOutlined />}>
        <NavLink to="./redo">Redo Quizs</NavLink>
      </Menu.Item>
      <Menu.Item key="fav" icon={<HeartOutlined />}>
        <NavLink to="./fav">Fav Quizs</NavLink>
      </Menu.Item>
      <Menu.Item key="result" icon={<BarChartOutlined />}>
        My Result
      </Menu.Item>
      <Menu.Item key="account" icon={<UserOutlined />}>
        Account
      </Menu.Item>
    </Menu>
  </Sider>
);

export default SideNavigation;
