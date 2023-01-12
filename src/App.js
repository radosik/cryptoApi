import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, CryptoDetails, CryptoCurrencies, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/cryptocurrencies' element={<CryptoCurrencies />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white' }}>
            CryptoRado <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App