import React from 'react';
import Overview from '../components/dashboard/Overview';
import Sidebar from '../components/dashboard/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Overview />
    </div>
  );
};

export default Dashboard;
