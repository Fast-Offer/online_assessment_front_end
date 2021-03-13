import React from 'react';
import {
  Layout,
} from 'antd';
import styles from './Register.module.less';
import Header from '../../components/LoginAndRegisterHeader/LoginAndRegisterHeader';
import Title from './component/Title/Title';
import Form from './component/Form/Form';
import Footer from '../../components/Footer/Footer';

const { Content } = Layout;

const Register = () => (
  <Layout>
    <Header />
    <Content className="container-sm">
      <div className={styles.center}>
        <Title />
        <Form />
      </div>
    </Content>
    <Footer />
  </Layout>
);

export default Register;
