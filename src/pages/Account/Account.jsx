import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import SideNavigation from '../../components/SideNavigation';
import MainHeader from '../../components/Header/Header';
import AccountDetails from '../../components/AccountDetails';

export default function Account() {
  return (
    <Layout style={{ height: '100vh' }}>
      <MainHeader />
      <Layout>
        <SideNavigation />
        <Layout>
          <div style={{ backgroundColor: '#fff', margin: '0 2px' }}>
            <Breadcrumb style={{ margin: '16px 24px' }}>
              <Breadcrumb.Item>Account</Breadcrumb.Item>
            </Breadcrumb>
            <h5 style={{ margin: '10px 24px' }}>Account UI Page</h5>
            <p style={{ margin: '10px 24px' }}>this is the account page, please enter your personal data, and then save it</p>
          </div>
          <div style={{ padding: '0 30px ', margin: '10px 0'}}>
            <AccountDetails />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}
