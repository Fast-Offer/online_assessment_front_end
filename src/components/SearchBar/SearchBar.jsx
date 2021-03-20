import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value) => {
  if (value) {
    // eslint-disable-next-line
    console.log(value);
  }
};

const SearchBar = () => (
  <Search
    placeholder="Enter quiz title to search"
    onSearch={onSearch}
    enterButton
    style={{ marginTop: '1em', maxWidth: '1280px' }}
  />
);

export default SearchBar;
