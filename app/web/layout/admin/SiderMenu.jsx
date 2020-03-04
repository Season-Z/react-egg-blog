import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';

function getPathname(name) {
  return name ? [name] : [];
}

const SiderMenu = function(props) {
  const { route, history, location } = props;
  const [selectedKeys, setSelectedKeys] = useState(
    getPathname(location.pathname)
  );

  useEffect(() => {
    setSelectedKeys(getPathname(location.pathname));
  }, [location.pathname]);

  const changeMenu = ({ key, keyPath }) => {
    history.push(key);
    setSelectedKeys(keyPath);
  };

  return (
    <Menu mode='inline' onClick={changeMenu} selectedKeys={selectedKeys}>
      {route &&
        route.map(
          v => v.component && <Menu.Item key={v.path}>{v.name}</Menu.Item>
        )}
    </Menu>
  );
};

SiderMenu.propTypes = {
  route: PropTypes.array
};

export default withRouter(SiderMenu);
