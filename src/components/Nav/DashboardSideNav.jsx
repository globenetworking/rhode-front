import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSideNav = () => {
  return (
    <div className="flex flex-col justify-between bg-primary min-w-fit min-h-screen">
      <div className="px-10 space-y-11">
        <Link to="/" class="branding flex">
          Home
        </Link>
        <Link to="/" class="branding flex">
          Home
        </Link>
        <Link to="/" class="branding flex">
          Home
        </Link>
        <Link to="/" class="branding flex">
          Home
        </Link>
        <Link to="/" class="branding flex">
          Home
        </Link>
      </div>

      <Link to="/" class="branding flex">
        Signout
      </Link>
    </div>
  );
};

export default DashboardSideNav;
