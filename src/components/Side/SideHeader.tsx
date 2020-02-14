import React from 'react';

function SideHeader() {
  return (
    <div className="mt-2">
      <a href="/" className="font-bold text-lg tracking-wider">
        FPMS Rules
      </a>
      <div className="font-hairline text-gray-600 text-xs tracking-wider mt-6">
        <p>Interactive producer</p>
        <p>Product designer</p>
        <p>Software developer</p>
      </div>
    </div>
  );
}

export default SideHeader;
