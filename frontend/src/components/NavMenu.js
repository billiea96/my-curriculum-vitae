import React from 'react';

export default function NavMenu(props) {
  return (
    <nav className="nav-menu">
      <ul>
        {props.navMenus &&
          props.navMenus.map((menu, index) => (
            <li key={index} className={menu.isActive ? 'active' : ''}>
              <a href={menu.link}>
                <i className={`bx ${menu.iconName}`}></i>{' '}
                <span>{menu.label}</span>
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
