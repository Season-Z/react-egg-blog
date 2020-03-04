import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { Spin, Icon } from 'antd';
import Layout from '@/layout/web';

const Home = lazy(() => import('@/webPage/home'));
const Edit = lazy(() => import('@/webPage/edit'));

const Loading = (
  <Spin indicator={<Icon type="loading" style={{ fontSize: 25 }} />} />
);
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={Loading}>
      <Component {...props} />
    </Suspense>
  );
};

export default [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/home'} />
      },
      {
        path: '/home',
        key: '/home',
        component: SuspenseComponent(Home)
      },
      {
        path: '/edit',
        key: '/edit',
        component: SuspenseComponent(Edit)
      }
    ]
  }
];
