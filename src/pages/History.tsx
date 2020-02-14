import React from 'react';
import MainFooter from '../components/Main/MainFooter';
import MainTobbar from '../components/Main/MainTobbar';
import HomeContent from '../components/Home/HomeContent';

function History() {
  return (
    <div className="flex flex-col justify-between bg-piotrf-bg-gray w-full">
      <MainTobbar />
      <HomeContent />
      <MainFooter />
    </div>
  );
}

export default History;
