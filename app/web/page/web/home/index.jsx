import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './index.less';

function Home(params) {
  const [loading, setLoading] = useState(false);

  return (
    <Spin tip="Loading..." spinning={loading}>
      <div className="app-home">
        <ul className="app-home-list">
          {/* {list.map(item => (
            <li key={item.id} className='app-home-list-item'>
              <Divider orientation='left'>
                <span className='title' onClick={() => jumpTo(item.id)}>
                  {item.title}
                </span>
                <span className='posted-time'>{item.createdAt.slice(0, 10)}</span>
              </Divider>

              <div
                onClick={() => jumpTo(item.id)}
                className='article-detail content'
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className='list-item-others'>
                <SvgIcon type='iconcomment' />
                <span style={{ marginRight: 5 }}> {calcCommentsCount(item.comments)}</span>

                <SvgIcon type='iconview' style={{ marginRight: 5 }} />
                <span>{item.viewCount}</span>

                <ArticleTag tagList={item.tags} categoryList={item.categories} />
              </div>
            </li>
          ))} */}
        </ul>
        {/* {list.length > 0 ? (
          <>
            {isGreaterThan1300 ? (
              <Preview list={list} />
            ) : (
              <>
                <div
                  className="drawer-btn"
                  onClick={e => setDrawerVisible(true)}
                >
                  <Icon type="menu-o" className="nav-phone-icon" />
                </div>
                <Drawer
                  title="文章列表"
                  placement="right"
                  closable={false}
                  onClose={e => setDrawerVisible(false)}
                  visible={drawerVisible}
                  getContainer={() => document.querySelector('.app-home')}
                >
                  <Preview list={list} showTitle={false} />
                </Drawer>
              </>
            )}
          </>
        ) : (
          <>
            {keyword && (
              <div className="no-data">
                <Empty description={<NoDataDesc keyword={keyword} />} />
              </div>
            )}
          </>
        )} */}

        {/* <Pagination
          {...pagination}
          onChange={page => {
            document.querySelector('.app-main').scrollTop = 0;
            pagination.onChange(page);
          }}
        /> */}
      </div>
    </Spin>
  );
}

// Home.propTypes = {};

export default Home;
