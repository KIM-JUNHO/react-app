import React from 'react';

export default function RequestForm() {
  return (
    <div className="flex flex-row justify-center mb-40">
      <form>
        <input id="srcIp" type="text" placeholder="Source IP" />
        <input id="dstIp" type="text" placeholder="Destination IP" />
        <input id="port" type="text" placeholder="Port" />
        <input id="protocol" type="text" placeholder="Protocol" />
      </form>
    </div>
  );
}
