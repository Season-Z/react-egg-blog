import { useState, useEffect, useCallback } from 'react';
import axios from '@/utils/request';

/**
 * useAntdTable hooks 用于处理 loading 逻辑以及换页 检索等
 *
 * @param {Object} obj
 * @param {Function} obj.fetchList 获取列表的函数
 * @param {Object} obj.queryParams 默认要检索的参数
 */
export default function useAntdTable({ requestUrl = '', queryParams = null }) {
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    totoal: 0
  });

  useEffect(() => {
    fetchListWithLoading();
  }, []);

  function fetchDataList(params = {}) {
    const requestParams = {
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...queryParams,
      ...params
    };

    axios
      .get(requestUrl, { params: requestParams })
      .then(response => {
        const { page, pageSize } = requestParams;
        const { count, data } = response.data;

        if (count > 0 && count > pageSize) {
          const totalPage = Math.ceil(count / pageSize);
          if (totalPage < page) return fetchDataList({ page: totalPage }); // 例如 删除了列表里只有一项且删除，则需要跳转回前一页 也即最后一页
        }

        pagination.current = page;
        pagination.total = count;
        setPagination({ ...pagination }); // 设置分页
        setDataList(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('fetchDataList error: ', requestParams, error);
        setLoading(false);
      });
  }

  function fetchListWithLoading(params) {
    setLoading(true);
    fetchDataList(params);
  }

  async function updateList(func) {
    try {
      setLoading(true);
      await func();
      fetchDataList();
    } catch (error) {
      console.log('updateList error: ', error);
      setLoading(false);
    }
  }

  /**
   * 分页、排序、筛选变化时触发
   * 注意 当前只封装分页
   */
  function handleTableChange(pagination, filters, sorter) {
    if (JSON.stringify(filters) === '{}' && JSON.stringify(sorter) === '{}') {
      fetchListWithLoading({ page: pagination.current });
    }
  }

  /**
   * 检索功能
   */
  function onSearch(params) {
    fetchListWithLoading({ page: 1, ...params });
  }

  return {
    tableProps: {
      rowKey: 'id',
      loading,
      dataSource: dataList,
      pagination: {
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        showTotal: total => `共 ${total} 条`
      },
      onChange: handleTableChange
    },
    dataList,
    updateList: useCallback(updateList, [pagination, queryParams]), // 进行 action 操作 比如删除修改数据后获取数据 @example updateList(() => { return axios.put('xxxx') })
    onSearch: useCallback(onSearch, [pagination, queryParams]),
    setLoading: useCallback(setLoading, [])
  };
}
