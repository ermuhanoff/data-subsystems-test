import React from 'react';
import { Layout } from 'antd';

import { MainPage } from './components/mainPage';
import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content>
        <MainPage />
      </Content>
    </Layout>
  );
}

export default App;
