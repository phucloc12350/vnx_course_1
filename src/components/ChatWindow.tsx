'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Input, Button, Avatar, Typography } from 'antd';
import { UserOutlined, RobotOutlined, SendOutlined } from '@ant-design/icons';

const { Title } = Typography;

export default function ChatWindow() {
  const { messages, sendMessage, status } = useChat({
    // maxSteps: 2 removed as it doesn't exist in useChat Options
  });

  const [input, setInput] = useState('');
  const isLoading = status === 'submitted' || status === 'streaming';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ role: 'user', parts: [{ type: 'text', text: input }] } as any);
    setInput('');
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Cuộn dòng tin nhắn đến cuối cùng khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          padding: '16px 24px',
          background: '#fff',
          borderBottom: '1px solid #e8e8e8',
        }}
      >
        <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
          Cô Minh English
        </Title>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          maxHeight: 'calc(100vh - 135px)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: isUser ? 'flex-end' : 'flex-start',
                  padding: '8px 0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: isUser ? 'row-reverse' : 'row',
                    alignItems: 'flex-start',
                    maxWidth: '80%',
                  }}
                >
                  <Avatar
                    icon={isUser ? <UserOutlined /> : <RobotOutlined />}
                    style={{
                      backgroundColor: isUser ? '#1890ff' : '#52c41a',
                      marginLeft: isUser ? '12px' : '0',
                      marginRight: isUser ? '0' : '12px',
                    }}
                  />
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '16px',
                      backgroundColor: isUser ? '#1890ff' : '#ffffff',
                      color: isUser ? '#fff' : '#000',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      whiteSpace: 'pre-wrap',
                      lineHeight: '1.5',
                    }}
                  >
                    {msg.parts?.filter((p: any) => p.type === 'text').map((p: any, i: number) => (
                      <span key={i}>{p.text}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={messagesEndRef} />
      </div>

      <div style={{ padding: '16px 24px', background: '#fff', borderTop: '1px solid #e8e8e8' }}>
        <form
          onSubmit={(e) => {
            if (!input.trim()) {
              e.preventDefault();
              return;
            }
            handleSubmit(e);
          }}
          style={{ display: 'flex', gap: '12px' }}
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            disabled={isLoading}
            size="large"
            autoFocus
            style={{ borderRadius: '8px' }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            size="large"
            disabled={isLoading || !input.trim()}
            htmlType="submit"
            style={{ borderRadius: '8px', minWidth: '100px' }}
          >
            {isLoading ? 'Đang soạn...' : 'Gửi'}
          </Button>
        </form>
      </div>
    </div>
  );
}
