import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

function HeaderMenu(props) {
  const { location } = props;
  return (
    <Menu
      mode="horizontal"
      className="header-nav"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          首页
        </Link>
      </Menu.Item>
      <Menu.Item key="/edit">
        <Link to="/edit">
          <Icon type="edit" />
          编写
        </Link>
      </Menu.Item>
    </Menu>
  );
}

HeaderMenu.propTypes = {
  location: PropTypes.object
};

export default withRouter(HeaderMenu);
