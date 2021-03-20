import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showDeleteConfirm = (quizId) => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: `<<< ${quizId} >>> will be deleted after you click on Yes...`,
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
