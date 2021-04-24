import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header/Header';
import SideNavigation from '../../components/SideNavigation';
import CustomPageHeader from '../../components/CustomPageHeader';
import CustomPageBody from '../../components/CustomPageBody';

const PracticeMode = () => (
  <Layout>
    <MainHeader />
    <Layout>
      <SideNavigation />
      <Layout>
        <CustomPageHeader h={1} m={11} s={11} page="Practice" />
        <CustomPageBody page="Practice" />
      </Layout>
    </Layout>
  </Layout>
);

export default PracticeMode;
