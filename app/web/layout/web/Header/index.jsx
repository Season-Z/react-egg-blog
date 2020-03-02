import React from 'react';
// import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const leftLayout = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
const rightLayout = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 };

function Header(props) {
  return (
    <Layout.Header className="app-header">
      <Row>
        <Col {...leftLayout}>
          <LeftPart />
        </Col>
        <Col {...rightLayout}>
          <RightPart />
        </Col>
      </Row>
    </Layout.Header>
  );
}

// Header.propTypes = {};

export default Header;
