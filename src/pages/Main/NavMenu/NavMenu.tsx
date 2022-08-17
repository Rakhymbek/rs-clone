import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './NavMenu.css';
import { NavLink } from 'react-router-dom';

const cnNavMenu = cn('NavMenu');

export const NavMenu: FC<{}> = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav
      className={cnNavMenu()}
      style={
        isVisible
          ? { backgroundColor: '#1c1c1c' }
          : { backgroundColor: '#181818' }
      }
    >
      <NavLink to={'/main'}>
        <p
          style={{
            fontWeight: '600',
            fontSize: '22px',
            color: '#ffffff',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              marginLeft: '-7px',
              color: '#580ea2',
            }}
          >
            ▶
          </span>
          <span
            style={{
              display: 'inline-block',
              marginLeft: '-7px',
              color: '#580ea2',
            }}
          >
            ▶
          </span>{' '}
          LePLAYER
        </p>
      </NavLink>
      <button className={cnNavMenu('Burger')} onClick={handleClick}>
        <svg
          className={cnNavMenu('Burger-Icon')}
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 1.49072H0" stroke="currentColor" />
          <path d="M20 6.49072H0" stroke="currentColor" />
          <path d="M20 11.4907H0" stroke="currentColor" />
        </svg>
      </button>
      {isVisible && (
        <ul className={cnNavMenu('List')}>
          <li>
            <NavLink className={cnNavMenu(null, ['List-Button'])} to="/main">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              to="/mytracks"
            >
              Мои треки
            </NavLink>
          </li>
          <li>
            <NavLink className={cnNavMenu(null, ['List-Button'])} to={'/'}>
              Выйти
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
