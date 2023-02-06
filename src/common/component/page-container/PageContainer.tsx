import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div className="d-flex flex-column h-100vh">
      <Header />
      <Outlet />
    </div>
  );
};

export default PageContainer;
