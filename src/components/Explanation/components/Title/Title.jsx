import React from 'react';
import { Typography, Space } from 'antd';

const Title = ({ userAnswer, correctAnswer }) => {
  const { Text } = Typography;
  return (
    <Space size={100}>
      <Space>
        <Text>Correct Answer</Text>
        <Text type="success">{correctAnswer}</Text>
      </Space>
      <Space>
        <Text>Your answer</Text>
        <Text type="danger">{userAnswer}</Text>
      </Space>
    </Space>
  );
};

export default Title;
