import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Col, Row, Card } from 'antd';

import contentStyle from './CardDisplay.module.less';

import data from './data'

const { Meta } = Card;

function cards(){
  return(
    <div className={contentStyle.card}>
      <Row gutter={8}>
       {data.map((card) => (
         <Col className="gutter-row" span={6}>
            <Card
              hoverable
                cover={<img alt="example" src= {card.url} 
              />}
            >
              <Meta title= {card.title} description= {card.discription} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
};

class Content extends React.Component {
  render() {
    return (
      <div className={contentStyle.background_container}>
        <div className={contentStyle.container}>
          {cards()} 
        </div>
      </div>
    );
  };
}

export default Content;
