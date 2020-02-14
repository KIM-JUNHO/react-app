import React from 'react';
import MainFooter from '../components/Main/MainFooter';
import MainTobbar from '../components/Main/MainTobbar';
import RequestContent from '../components/Request/RequestContent';
import RequestForm from '../components/Request/RequestForm';

function Request() {
  return (
    <div className="flex flex-col justify-between bg-piotrf-bg-gray w-full">
      <MainTobbar />
      <RequestContent />
      <RequestForm />
      <MainFooter />
    </div>
  );
}

export default Request;
