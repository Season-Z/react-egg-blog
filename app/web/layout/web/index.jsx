import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import { renderRoutes } from 'react-router-config';
import Header from './Header';
import SideMenu from './SideMenu';
import '@/asset/css/global.css';
import '@/asset/css/app.less';

const sideLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 };
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 };

const WebLayout = memo(function WebLayout(props) {
  const { route } = props;

  return (
    <Layout className="app-container">
      <Header />
      <Row gutter={16} className="app-wrapper">
        <Col {...sideLayout}>
          <SideMenu {...props} />
        </Col>
        <Col {...contentLayout}>{renderRoutes(route.routes)}</Col>
      </Row>
    </Layout>
  );
});

WebLayout.propTypes = {
  route: PropTypes.object
};

export default WebLayout;
