import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import NavigationBarStyle from './NavigationBarStyle.module.less';

class NavigationBar extends React.Component {

  render() {
    return (
      <div className={NavigationBarStyle.container}>
        <p className={NavigationBarStyle.p}>Category:</p>
        <Menu className={NavigationBarStyle} onClick={this.handleClick} selectedKeys={[this.current]} mode="horizontal">
          <Menu.Item key="all">
            All
          </Menu.Item>
          <Menu.Item key="HTML">
            HTML
          </Menu.Item>
          <Menu.Item key="Java">
            JAVA
          </Menu.Item>
          <Menu.Item key="TypeScript">
            TypeScript
          </Menu.Item>
          <Menu.Item key="ES6">
            ES6
          </Menu.Item>
          <Menu.Item key="CSS">
            CSS
          </Menu.Item>
          <Menu.Item key="Vue">
            Vue
          </Menu.Item>
          <Menu.Item key="PHP">
            PHP
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavigationBar;
