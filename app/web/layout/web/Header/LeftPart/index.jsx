import React from 'react';
import { Link } from 'react-router-dom';

function LeftPart() {
  return (
    <div className="header-left">
      <Link to="/">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="logo"
          className="logo"
        />
        <span className="blog-name">Blob</span>
      </Link>
    </div>
  );
}

export default LeftPart;
