import React, { useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './NavMenu.css';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../components/Logo/Logo';
import { BGCOLOR, BGCOLOR_LIGHT, COLOR, text, lang } from '../../../constants';
import { SpanChangeColor } from '../../../components/SpanChangeColor/SpanChangeColor';
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
          ? { backgroundColor: BGCOLOR_LIGHT }
          : { backgroundColor: BGCOLOR }
      }
    >
      <NavLink to={'/main'}>
        <Logo textColor={COLOR} />
      </NavLink>
      <IconButton className={cnNavMenu('Burger')} onClick={handleClick}>
        <MenuIcon
          className={cnNavMenu('Burger-Icon')}
          style={{ color: COLOR }}
          sx={{ mb: 3.5 }}
        />
      </IconButton>
      {isVisible && (
        <ul className={cnNavMenu('List')}>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: COLOR }}
              to="/main"
            >
              <SpanChangeColor>{text.menu.homepage[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: COLOR }}
              to="/mytracks"
            >
              <SpanChangeColor>{text.menu.mytracks[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: COLOR }}
              to={'/profile'}
            >
              <SpanChangeColor>{text.menu.profile[lang]}</SpanChangeColor>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={cnNavMenu(null, ['List-Button'])}
              style={{ color: COLOR }}
              to={'/'}
            >
              <SpanChangeColor>{text.menu.logout[lang]}</SpanChangeColor>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
