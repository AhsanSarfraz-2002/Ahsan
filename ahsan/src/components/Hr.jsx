import React from 'react';
import BigHeader from './BigHeader';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <hr className="border-t-2 border-gray-300" />
      <BigHeader />
    </>
  );
}

export default Layout;
