import React from 'react';
import { Comment, List } from 'antd';
import CommentsStyle from './Comments.module.less';

const Comments = ({ data }) => (
  <List
    className={CommentsStyle.container}
    header={`${data.length} replies `}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <li>
        <Comment
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datatime={item.datatime}
        />
      </li>
    )}
  />
);

export default Comments;
