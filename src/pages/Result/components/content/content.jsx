import React from 'react';
import { Button } from 'antd';
import ContentStyle from './content.module.less';

const content = () => (
  <div className={ContentStyle.container}>
    <h2> Mock Test Analysis</h2>
    <h6>Your correct rate is above 80% and you meet ANZ Junoir requirement...</h6>
    <div className={ContentStyle.buttonContainer}>
      <Button type="primary">Back to Library</Button>
      <Button type="primary">Head to result</Button>
    </div>
  </div>
);

export default content;
