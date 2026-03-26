'use client';

import React from 'react';
import { Layout } from 'antd';
import AppSidebar from '@/components/Sidebar';
import ChatWindow from '@/components/ChatWindow';

const { Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
      <AppSidebar />
      <Layout>
        <Content style={{ margin: 0, minHeight: 280, flex: 1 }}>
          <ChatWindow />
        </Content>
      </Layout>
    </Layout>
  );
}
