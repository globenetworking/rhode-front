import React from 'react';
import DashboardSideNav from '../../components/Nav/DashboardSideNav';

const DashboardHome = () => {
  return (
    <>
      <DashboardSideNav />

      <div className="flex flex-col relative">
        <h1>Dashboard Home</h1>
      </div>
    </>
  );
};

export default DashboardHome;
