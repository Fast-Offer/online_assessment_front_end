import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Layout,
  Avatar,
  Row,
  Col,
  Button,
} from 'antd';
import style from './Header.module.less';

const { Header } = Layout;

function MainHeader() {
  const history = useHistory();

  return (
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
          <Button
            className={style.button}
            onClick={() => {
              localStorage.setItem('isAuth', false);
              localStorage.removeItem('isAuth');
              localStorage.removeItem('userId');
              history.push('/login');
            }}
          >
            Logout
          </Button>
        </Col>
      </Row>
    </Header>
  );
}

export default MainHeader;
