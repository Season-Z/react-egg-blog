import axios from 'axios';
import { message, notification } from 'antd';
// import storage from '@/utils/storage';

const resCode = {
  10000: '请重新登录',
  10002: '当前未登录，请重新登录',
  10003: '服务端错误'
};

const instance = axios.create({
  timeout: 25000,
  withCredentials: true
});

instance.interceptors.request.use(
  config => {
    // const token = storage.getItem('token');
    // if (token) {
    //   config.headers['Authorization'] = token;
    // }

    return config;
  },
  err => {
    message.error('bad request');
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  response => {
    const { data, status } = response;

    if (200 < status < 300) {
      return data;
    }

    notification.error({
      message: '请求错误',
      description: (code && resCode[code]) || message
    });

    return Promise.reject(response.data);
  },
  err => {
    notification.error({
      message: '接口请求失败'
    });

    return Promise.reject(err);
  }
);

export default instance;
