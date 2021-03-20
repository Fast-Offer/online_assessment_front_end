import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation/SideNavigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import RedoAndFavTable from '../../components/RedoAndFavTable/RedoAndFavTable';
import './Fav.module.less';

const Fav = () => (
  <Layout>
    <MainHeader />
    <Layout>
      <SideNavigation />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Fav Quizs</Breadcrumb.Item>
        </Breadcrumb>
        <h5>The Darkest before Dawn...</h5>
        <SearchBar />
        <RedoAndFavTable />
      </Layout>
    </Layout>
  </Layout>
);

export default Fav;
