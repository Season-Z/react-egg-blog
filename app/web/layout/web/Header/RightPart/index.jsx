import React from 'react';
import Search from './Search';
import UserCenter from './UserCenter';
import HeaderMenu from './HeaderMenu';

function RightPart(props) {
  return (
    <div className="header-right">
      <Search />
      <UserCenter />
      <HeaderMenu />
    </div>
  );
}

export default RightPart;
