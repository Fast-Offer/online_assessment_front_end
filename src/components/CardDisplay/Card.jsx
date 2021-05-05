import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Col, Row, Card } from 'antd';
import axios from 'axios';
import contentStyle from './CardDisplay.module.less';

const { Meta } = Card;

function Cards() {
  const requestUrl = '/collections';
  const [dataState, setDataState] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(requestUrl)
      .then((response) => {
        setDataState(response.data);
        setIsFetching(false);
        // eslint-disable-next-line
        console.log(dataState);
      })
      .catch((error) => {
        if (error.response) {
          // eslint-disable-next-line
          console.log(error.response);
        }
      });
  }, [isFetching]);

  return (
    <div className={contentStyle.card}>
      <Row gutter={8}>
        {dataState.map((card) => (
          <Col className="gutter-row" span={6} key={card.collectionId}>
            <Card
              hoverable
              cover={(
                <img
                  alt="example"
                  src={card.imageUrl}
                />
              )}
            >
              <Meta title={card.name} description={card.discription} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
