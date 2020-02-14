import React from 'react';

function SideBody() {
  const serviceMenu = [
    {
      name: 'HOME',
      value: 'home'
    },
    {
      name: 'NEW RULES',
      value: 'request'
    },
    {
      name: 'RULE HISTORY',
      value: 'history'
    }
  ];
  const manageMenu = [
    {
      name: 'CONTACT',
      value: 'contact'
    },
    {
      name: 'SETTINGS',
      value: 'settings'
    }
  ];
  return (
    <nav>
      <ul className="mb-48">
        {serviceMenu.map(menu => (
          <li className="mt-4 mb-4 font-bold text-piotrf-text-gray hover:text-black text-lg tracking-wider">
            <a href={menu.value}>{menu.name}</a>
          </li>
        ))}
        <hr className="mt-8 mb-8" />
        {manageMenu.map(menu => (
          <li className="mt-4 mb-4 font-bold text-piotrf-text-gray hover:text-black text-lg tracking-wider">
            <a href={menu.value}>{menu.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBody;
