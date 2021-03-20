import React from 'react';
import styles from './Register.module.less';
import Header from '../../components/LoginAndRegisterHeader/LoginAndRegisterHeader';
import Title from './component/Title/Title';
import Form from './component/Form/Form';
import Footer from '../../components/Footer/Footer';


const Register = () => (
  <div>
    <Header />
    <div className="container-sm">
      <div className={styles.center}>
        <Title />
        <Form />
      </div>
    </div>
    <Footer />
  </div>
);

export default Register;
