import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';

// import contentStyle from './CardDisplay.module.less';

class Cards extends React.Component {
  render() {
    const { Meta } = Card;
    return (
      <div>
        <Card
          hoverable
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}

export default Cards;
