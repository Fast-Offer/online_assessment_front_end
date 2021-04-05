/* eslint-disable no-console */
import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

import Layout from 'antd/lib/layout/layout';
import SearchBarNav from '../../components/SearchBarNav/SearchBarNav';
import CardsDisplay from '../../components/CardDisplay/CardDisplay';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideNavigation from '../../components/SideNavigation/SideNavigation';

class LibraryLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <SideNavigation />
          <Layout>
            <Breadcrumb style={{ padding: '0 24px' }}>
              <Breadcrumb.Item>Library</Breadcrumb.Item>
            </Breadcrumb>
            <SearchBarNav />
            <NavigationBar />
            <CardsDisplay />
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default LibraryLayout;
