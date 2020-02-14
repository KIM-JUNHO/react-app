import React from 'react';

function HomeContent() {
  return (
    <div className="flex flex-col flex-wrap p-20 justify-center h-full">
      <span className="text-white tracking-widest text-sm mb-6">
        Hi, I'M JUNHO.
      </span>
      <span className="font-bold text-4xl tracking-wide mb-6 max-w-lg">
        I help companies deliver delightful digital experiences
      </span>
      <p className="text-piotrf-text-gray text-2xl mb-6 max-w-lg">
        I’m an interactive producer, product designer and software developer
        with a broad range of skills and expertise in all user experience design
        related fields.
      </p>
      <div className="flex flex-row font-bold ">
        <a className="mr-8 underline">SEE MY WORK</a>
        <a>GET IN TOUCH</a>
      </div>
    </div>
  );
}

export default HomeContent;
