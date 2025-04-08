import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>首页</h1>
      <p>欢迎来到我的 React 应用</p>
      <p>这个页面已配置热更新功能，修改后将自动刷新</p>
      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          borderRadius: '8px',
        }}
      >
        <h3>热更新测试区域</h3>
        <p>修改此处文本并保存，查看页面是否自动更新</p>
        <p>当前时间: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Home;
