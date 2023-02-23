import React from 'react';
import Overview from '../components/dashboard/Overview';
import Sidebar from '../components/dashboard/Sidebar';
import style from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Overview />
    </>
  );
};

export default Dashboard;
