import React from 'react';
import SideHeader from './SideHeader';
import SideBody from './SideBody';
import SideFooter from './SideFooter';

function Side() {
  return (
    <div className="hidden md:flex flex-col justify-between w-64 p-6 h-screen sticky top-0">
      <SideHeader />
      <SideBody />
      <SideFooter />
    </div>
  );
}

export default Side;
