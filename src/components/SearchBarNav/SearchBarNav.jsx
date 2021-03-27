import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

import SearchBarStyle from './SearchBarStyle.module.less';
import SearchBar from '../SearchBar/SearchBar';

class SearchBarNav extends React.Component {
  render() {
    return (
      <div className={SearchBarStyle.container}>
        <SearchBar />
        <div className={SearchBarStyle.category}>
          <Menu onClick={this.handleClick} selectedKeys={[this.current]} mode="horizontal">
            <Menu.Item key="interveiwquestion">
              Interview Questions
            </Menu.Item>
            <Menu.Item key="personailitytest">
              Personaility Test
            </Menu.Item>
            <Menu.Item key="practise">
              Practise
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default SearchBarNav;
