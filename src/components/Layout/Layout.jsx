import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto p-2 md:p-6">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
