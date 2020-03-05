export default [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    width: '6%',
    render: (t, r, i) => i + 1
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content'
  },
  {
    title: '查看次数',
    dataIndex: 'viewCount',
    key: 'viewCount'
  }
];
