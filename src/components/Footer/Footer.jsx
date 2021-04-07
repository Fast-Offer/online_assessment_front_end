import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import styles from './Footer.module.less';

const Footer = () => (
  <div className={styles.footer}>
    <Row>
      <Col span={8}> </Col>
      <Col span={8}>
        <p>
          Copyright
          {new Date().getFullYear()}
          Fast Offer Team
        </p>
      </Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        <QuestionCircleOutlined className={styles.questionMark} />
      </Col>
    </Row>
  </div>
);

export default Footer;
