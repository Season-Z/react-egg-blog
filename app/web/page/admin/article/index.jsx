import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import request from '@/utils/request';
import useAntdTable from '@/hooks/useAntdTable';
import columns from './columns';

const Article = () => {
  const { tableProps } = useAntdTable({
    requestUrl: '/admin/article/list'
  });
  useEffect(() => {
    request.get('/admin/article/list').then(res => {
      console.log(res);
    });
  }, []);

  return (
    <Fragment>
      <Table columns={columns} {...tableProps} />
    </Fragment>
  );
};

Article.propTypes = {};

export default Article;
