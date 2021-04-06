import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import contentStyle from './CardDisplay.module.less';

import Cards from './Card';

class Content extends React.Component {
  render() {
    return (
      <div className={contentStyle.background_container}>
        <div className={contentStyle.container}>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Content;
