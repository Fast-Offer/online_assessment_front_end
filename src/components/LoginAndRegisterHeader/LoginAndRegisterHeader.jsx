import React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './LoginAndRegisterHeader.module.less';

const Header = () => (
  <div className={styles.header}>
    <GlobalOutlined className={styles.globalMark} />
  </div>
);

export default Header;
