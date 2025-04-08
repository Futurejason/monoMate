import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - 页面未找到</h1>
      <p>您访问的页面不存在，请检查 URL 是否正确。</p>
      <Link to="/">返回首页</Link>
    </div>
  );
};

export default NotFound;
