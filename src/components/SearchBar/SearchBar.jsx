import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input, Space, Menu } from 'antd';

import SearchBarStyle from './SearchBarStyle.module.less';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     current: 'mail',
  //   };
  // }

  // handleClick = (e) => {
  //   console.log('click ', e);
  //   this.setState({ current: e.key });
  // };

  render() {
    const { Search } = Input;
    // const onSearch = (value) => console.log(value);
    return (
      <div className={SearchBarStyle.container}>
        <div className={SearchBarStyle.searchbar}>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              // onSearch={onSearch}
            />
          </Space>
        </div>
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

export default SearchBar;
