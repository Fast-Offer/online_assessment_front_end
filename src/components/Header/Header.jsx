import React from 'react';
import {
  Layout,
  Avatar,
  Row,
  Col,
} from 'antd';
import style from './Header.module.less';

const { Header } = Layout;

const MainHeader = () => (
  <Header className="header">
    <Row>
      <Col span={8}>
        <div className="logo" />
        <span className={style.titleOnHeader}>Online Assessment</span>
      </Col>
      <Col span={8}> </Col>
      <Col span={8} className={style.rightElements}>
        <Avatar className={style.avatar}>SM</Avatar>
        <span className={style.userNameOnHeader}>Serati Ma</span>
      </Col>
    </Row>
  </Header>
);

export default MainHeader;
