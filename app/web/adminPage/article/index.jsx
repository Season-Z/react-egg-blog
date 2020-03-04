import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import request from '@/utils/request';

const Article = () => {
  useEffect(() => {
    request.get('/admin/article/list').then(res => {
      console.log(res);
    });
  }, []);

  return <div>ss</div>;
};

Article.propTypes = {};

export default Article;
