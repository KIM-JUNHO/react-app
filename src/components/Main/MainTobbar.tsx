import React from 'react';

function MainTobbar() {
  return (
    <div className="md:hidden flex flex-row justify-between p-4">
      <div>
        <a className="font-bold text-sm tracking-widest">MENU</a>
      </div>
      <div>
        <a className="font-bold text-lg tracking-wider">FPMS Rules</a>
      </div>
      <div>
        <a className="font-bold text-sm tracking-widest">EMAIL</a>
      </div>
    </div>
  );
}

export default MainTobbar;
