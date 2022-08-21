import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../components/Logo/Logo';
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
        <Logo textColor='#fff' />
      </NavLink>
      <IconButton className={cnNavMenu('Burger')} onClick={handleClick}>
        <MenuIcon className={cnNavMenu('Burger-Icon')} sx={{ mb: 3.5 }} />
      </IconButton>
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
              to="mytracks"
            >
              Мои треки
            </NavLink>
          </li>
          <li>
            <NavLink className={cnNavMenu(null, ['List-Button'])} to={"/"}>
              Выйти
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
