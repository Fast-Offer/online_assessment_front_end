import React, { useState } from 'react';
import { Radio, Form, Button } from 'antd';
import ContentStyle from './ContentStyle.module.less';

const Content = ({
  data, questionIndex, saveAns, setCount, count, answers,
}) => {
  const [option, setOption] = useState();
  const onChange = (e) => {
    setOption(
      {
        id: e.target.id,
        value: e.target.value,
      },
    );
  };
  const handleSubmit = () => {
    // eslint-disable-next-line
    console.log(answers);
  };

  return (
    <Form.Item>
      <Radio.Group
        name={data[questionIndex].questionId}
        defaultValue={questionIndex}
        onChange={onChange}
      >
        <h2>
          {data[questionIndex].title}
        </h2>
        <Radio id={data[questionIndex].questionId} value="A">{data[questionIndex].optionA}</Radio>
        <br />
        <Radio id={data[questionIndex].questionId} value="B">{data[questionIndex].optionB}</Radio>
        <br />
        <Radio id={data[questionIndex].questionId} value="C">{data[questionIndex].optionC}</Radio>
        <br />
        <Radio id={data[questionIndex].questionId} value="D">{data[questionIndex].optionD}</Radio>
        <br />
      </Radio.Group>
      <div className={ContentStyle.buttonContainer}>
        <Button
          style={{ margin: '16px ' }}
          type="primary"
          onClick={() => saveAns(option)}
        >
          Save
        </Button>
        <Button style={{ margin: '16px ' }} type="primary" onClick={() => setCount(count - 1)}>Previous</Button>
        <Button
          style={{ margin: '16px ' }}
          type="primary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Next
        </Button>
        <Button style={{ margin: '16px ', backgroundColor: '#B518FF', borderColor: '#B518FF' }} type="primary" htmlType="submit" onClick={() => handleSubmit()}>Submit</Button>
      </div>
    </Form.Item>
  );
};

export default Content;
