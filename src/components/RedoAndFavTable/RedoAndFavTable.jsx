import React from 'react';
import {
  Layout, Table, Space, Button,
} from 'antd';
import data from './fakeData';
import showDeleteConfirm from '../showDeleteConfirm/showDeleteConfirm';

const { Content } = Layout;
const { Column } = Table;

const RedoAndFavTable = () => (
  <Content
    className="site-layout-background"
    style={{
      padding: 24,
      margin: 0,
      minHeight: 280,
    }}
  >
    <Table dataSource={data}>
      <Column title="Quiz ID" dataIndex="quizId" key="quizId" />
      <Column title="Quiz Title" dataIndex="quizTitle" key="quizTitle" />
      <Column title="Category" dataIndex="category" key="category" />
      <Column title="Correct Rate" dataIndex="correctRate" key="correctRate" />
      <Column title="Timestamp" dataIndex="timestamp" key="timestamp" />
      <Column
        title="Action"
        key="action"
        // Renderer of the table cell. function(text, record, index) {}
        render={(record) => (
          <Space size="middle">
            <Button
              type="link"
              onClick={() => {
                // ***********************************************************
                // NOTE: You need modify code in this block
                // ***********************************************************
                // eslint-disable-next-line
              console.log(record.quizId);
              }}
            >
              View
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
                showDeleteConfirm(record.quizId);
              }}
            >
              Delete
            </Button>
          </Space>
        )}
      />
    </Table>
  </Content>
);

export default RedoAndFavTable;
