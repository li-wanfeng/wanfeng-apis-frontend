import {GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import '@umijs/max';
import React from 'react';
export type SiderTheme = 'light' | 'dark';
export const SelectLang = () => {
  return (
      // eslint-disable-next-line react/jsx-no-undef
      <GithubOutlined
      style={{
        padding: 4,
      }}
    />
  );
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://github.com/li-wanfeng');
      }}
    >
      <GithubOutlined />
    </div>
  );
};
