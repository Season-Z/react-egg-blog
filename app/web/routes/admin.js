import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { Spin, Icon } from 'antd';
import Layout from '@/layout/admin';
import Article from '@/adminPage/article';

const Loading = (
  <Spin indicator={<Icon type='loading' style={{ fontSize: 25 }} />} />
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
    path: '/admin',
    component: Layout,
    routes: [
      {
        path: '/admin',
        exact: true,
        render: () => <Redirect to={'/admin/article'} />
      },
      {
        path: '/admin/article',
        key: '/admin/article',
        name: '文章列表',
        component: SuspenseComponent(Article)
      }
    ]
  }
];
