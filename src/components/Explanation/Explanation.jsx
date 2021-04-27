import React from 'react';
import { Card } from 'antd';
import ExplanationStyle from './Explanation.module.less';
import Title from './components/Title';

const Explanation = ({ userAnswer, correctAnswer, description }) => (
  <Card
    className={ExplanationStyle.Card}
    title={<Title userAnswer={userAnswer} correctAnswer={correctAnswer} />}
    bordered
  >
    <p>{description}</p>
  </Card>
);

export default Explanation;
