import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

function Search(props) {
  const [searchValue, setSearchValue] = useState(undefined);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const submitSearchValue = () => {
    if (!searchValue) {
      props.history.push('/');
      return;
    }

    props.history.push(`/?search=${searchValue}&pageNo=1`);
  };

  const handlePressEnter = e => e.target.blur();

  return (
    <div id="search-box">
      <Icon type="search" className="search-icon" onClick={submitSearchValue} />
      <Input
        placeholder="搜索"
        className="search-input"
        value={searchValue}
        onChange={handleChange}
        onBlur={submitSearchValue}
        onPressEnter={handlePressEnter}
      />
    </div>
  );
}

Search.propTypes = {
  history: PropTypes.object
};

export default withRouter(Search);
