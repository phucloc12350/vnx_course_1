'use client';

import React from 'react';
import { Layout, Menu, Select, Input, Typography, Divider } from 'antd';
import {
  MessageOutlined,
  BookOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Option } = Select;
const { Text } = Typography;

const AppSidebar = ({ level, setLevel, weakness, setWeakness }: any) => {
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
      <Divider style={{ margin: '16px 0' }} />
      <div style={{ padding: '0 16px' }}>
        <Text strong>Trình độ hiện tại</Text>
        <Select
          value={level}
          onChange={setLevel}
          style={{ width: '100%', marginTop: 8, marginBottom: 16 }}
        >
          <Option value="A0 (Mới bắt đầu)">A0 (Mới bắt đầu)</Option>
          <Option value="A1 (Sơ cấp)">A1 (Sơ cấp)</Option>
          <Option value="A2 (Tiền trung cấp)">A2 (Tiền trung cấp)</Option>
          <Option value="B1 (Trung cấp)">B1 (Trung cấp)</Option>
          <Option value="B2 (Trung cao cấp)">B2 (Trung cao cấp)</Option>
          <Option value="C1 (Cao cấp)">C1 (Cao cấp)</Option>
        </Select>

        <Text strong>Điểm yếu cần khắc phục</Text>
        <Input.TextArea
          value={weakness}
          onChange={(e) => setWeakness(e.target.value)}
          placeholder="Ví dụ: Lười học từ vựng, hay sai ngữ pháp, phát âm kém..."
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{ marginTop: 8 }}
        />
      </div>
    </Sider>
  );
};

export default AppSidebar;
