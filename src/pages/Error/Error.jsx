import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation';
import CustomPageHeader from '../../components/CustomPageHeader';
import CustomPageBody from '../../components/CustomPageBody';

const Error = () => (
  <Layout>
    <MainHeader />
    <Layout>
      <SideNavigation />
      <Layout>
        <CustomPageHeader page="Error" />
        <CustomPageBody page="Error" />
      </Layout>
    </Layout>
  </Layout>
);

export default Error;
