import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showDeleteConfirm = (quizId) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    const acquireData = async () => {
      await axios.post('/deleteRedoQuestions', {
        questionId: quizId,
        intervieweeID: localStorage.userId,
      })
        .then((response) => {
          setResult(response.data);
          console.log(result);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    };
    acquireData();
  }, []);

  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: `Record :             
    [ ${quizId} ] 
    will be deleted after you click on Yes...`,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      // ***********************************************************
      // NOTE: You need modify code in this block
      // ***********************************************************
      // eslint-disable-next-line
        console.log('OK has been clicked...');
    },
    onCancel() {
      // ***********************************************************
      // NOTE: You need modify code in this block
      // ***********************************************************
      // eslint-disable-next-line
        console.log('No has been clicked...');
    },
  });
};

export default showDeleteConfirm;
