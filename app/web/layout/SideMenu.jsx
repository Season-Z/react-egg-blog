import React from 'react';
import { Divider, Tag } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SIDEMENU } from '../utils/config';

function SideMenu(props) {
  const { articleList, tagList } = props;
  console.log(articleList);
  return (
    <div className="app-sidebar">
      <img src={SIDEMENU.avatar} className="sider-avatar" alt="" />
      <h2 className="title">{SIDEMENU.title}</h2>
      <h5 className="sub-title">{SIDEMENU.subTitle}</h5>
      {/* <ul className="home-pages">
        {Object.entries(SIDEMENU.homepages).map(([linkName, item]) => (
          <li key={linkName}>
            {item.icon}
            <Href href={item.link}>{linkName}</Href>
          </li>
        ))}
      </ul> */}

      <Divider orientation="left">热门文章</Divider>
      <ul className="article-list">
        {articleList.map(d => (
          <li key={d.id}>
            <Link to={`/article/${d.id}`}>{d.title}</Link>
          </li>
        ))}
      </ul>

      <Divider orientation="left">标签</Divider>
      <div className="tag-list">
        {tagList.map((tag, i) => (
          <Tag key={i} color={tag.color}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
          </Tag>
        ))}
      </div>
    </div>
  );
}

SideMenu.propTypes = {
  articleList: PropTypes.array,
  tagList: PropTypes.array
};
SideMenu.defaultProps = {
  articleList: [],
  tagList: []
};
export default SideMenu;
