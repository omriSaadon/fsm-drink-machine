import React from 'react';
import ReactDOM from 'react-dom';
import DrinkMachine from './components/DrinkMachine/DrinkMachine';
import MainLayout from './components/Layout/MainLayout';
import 'antd/dist/antd.css';

ReactDOM.render(
  <MainLayout>
    <DrinkMachine />
  </MainLayout>,
  document.getElementById('root'),
);
