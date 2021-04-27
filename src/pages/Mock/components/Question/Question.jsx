import React, { useState } from 'react';
import Content from './components/Content';
import QuestionStyle from './QuestionStyle.module.less';
import Data from './QuestionData';

const Question = () => {
  const [count, setCount] = useState(0);
  const [answers, setAnswer] = useState([]);
  const saveAns = (option) => {
    const answerIdx = answers.findIndex((answer) => answer.id === option.id);
    if (answerIdx !== -1) {
      const newAnswers = answers.map((ans) => ({ ...ans }));
      newAnswers[answerIdx].value = option.value;
      setAnswer(newAnswers);
    } else {
      setAnswer(
        [
          ...answers,
          {
            id: option.id,
            value: option.value,
          },
        ],
      );
    }
  };
  return (
    <div className={QuestionStyle.container}>
      <Content
        data={Data}
        questionIndex={count}
        saveAns={saveAns}
        setCount={setCount}
        count={count}
        answers={answers}
      />
    </div>
  );
};

export default Question;
