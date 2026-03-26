'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MessageOutlined,
  BookOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const AppSidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      style={{
        height: '100vh',
        borderRight: '1px solid #f0f0f0',
      }}
    >
      <div
        className="logo"
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#1890ff',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        Lớp Tiếng Anh
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <MessageOutlined />,
            label: 'Cô Minh English',
          },
          {
            key: '2',
            icon: <BookOutlined />,
            label: 'Bài tập Ngữ pháp',
          },
          {
            key: '3',
            icon: <SettingOutlined />,
            label: 'Cài đặt',
          },
        ]}
      />
    </Sider>
  );
};

export default AppSidebar;
