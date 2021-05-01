import React, { useState, useEffect } from 'react';
import {
  Layout, Table, Space, Button, Modal,
} from 'antd';
import axios from 'axios';
// import data from './fakeData';
import showDeleteConfirm from '../showDeleteConfirm/showDeleteConfirm';

const { Content } = Layout;
const { Column } = Table;

const RedoAndFavTable = () => {
  const [dataState, setDataState] = useState();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [currentViewedQuizId, setCurrentViewedQuizId] = useState(null);

  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };
  useEffect(() => {
    const acquireData = async () => {
      await axios.post('/redo', {
        id: localStorage.userId,
      })
        .then((response) => {
          setDataState(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          }
        });
    };
    acquireData();
  }, []);

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Table dataSource={dataState} rowKey={(record) => record.questionId}>
        <Column title="Quiz ID" dataIndex="questionId" key="quizId" />
        <Column title="Quiz Title" dataIndex="title" key="quizTitle" />
        <Column title="Category" dataIndex="category" key="category" />
        <Column
          title="Action"
          key="action"
          align="center"
          // Renderer of the table cell. function(text, record, index) {}
          render={(record) => (
            <Space size="small">
              <Button
                type="link"
                onClick={() => {
                  // ***********************************************************
                  // NOTE: You need modify code in this block
                  // ***********************************************************
                  // eslint-disable-next-line
                  setCurrentViewedQuizId(record.questionId);
                  toggleModalVisibility();
                }}
              >
                <span>
                  View
                  {record.quizId}
                </span>
              </Button>
              <Button
                type="link"
                danger
                onClick={() => {
                  // ***********************************************************
                  // NOTE: You need add code in this block
                  // ***********************************************************
                  // Modal will show up and the quizId will be transferred to
                  // [ showDeleteConfirm component ]
                  setCurrentViewedQuizId(record.questionId);
                  showDeleteConfirm(record.questionId);
                }}
              >
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
      <Modal title="my info modal" visible={modalVisibility} onOk={toggleModalVisibility} onCancel={toggleModalVisibility}>
        <p>
          The quiz id is :
          {` [ 
          ${currentViewedQuizId}
           ]`}
        </p>
      </Modal>
    </Content>
  );
};

export default RedoAndFavTable;
