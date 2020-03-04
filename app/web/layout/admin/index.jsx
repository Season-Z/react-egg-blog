import React, { memo } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { renderRoutes } from 'react-router-config';
import SiderMenu from './SiderMenu';
import '@/asset/css/admin.css';

const { Header, Content, Sider } = Layout;

export default memo(function Admin(props) {
  const { route } = props;
  return (
    <Layout>
      <Header className='header'>
        <div className='logo' />
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <SiderMenu route={route.routes} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className='site-layout-background'
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {renderRoutes(route.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});
