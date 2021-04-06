import { Progress } from 'antd';
import React from 'react';

const ProgressCircle = ({ percentage }) => {
  const a = 0;
  return (
    <div>
      <Progress type="circle" percent={percentage} name={a} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="line" percent={75} status="active" />
    </div>
  );
};

export default ProgressCircle;
