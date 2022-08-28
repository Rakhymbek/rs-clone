import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';

import { SpanChangeColor } from '../../../components/changeColor/SpanChangeColor/SpanChangeColor';
import { AlbumCover } from '../../../components/AlbumCover/AlbumCover';
import { text, USER } from '../../../constants';
import { useAppSelector } from '../../../hook';

import './Sidebar.css';
import { extradarkToDark, extradarkToHover } from '../../../utils/utils';
// import './Animation.css';

const cnSidebar = cn('Sidebar');

export type SidebarProps = {
  isVisible: boolean;
  isUserVisible?: boolean;
};

export const Sidebar: FC<SidebarProps> = ({
  isVisible,
  isUserVisible = true,
}) => {
  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  return (
    <Box className={cnSidebar()}>
      {isUserVisible && (
        <NavLink to={'/profile'}>
          <div className={cnSidebar('User')}>
            <Typography
              className={cnSidebar('User-Name')}
              style={{ color: textColor }}
            >
              <SpanChangeColor colorHover={colorHover} colorActive={colorDark}>
                {USER.name}
              </SpanChangeColor>
            </Typography>
            <div className={cnSidebar('User-Avatar')}></div>
          </div>
        </NavLink>
      )}

      <Card
        className={cnSidebar('List')}
        sx={
          isVisible
            ? { display: 'block', backgroundColor: 'transparent' }
            : { display: 'none' }
        }
        style={{ border: 'none', boxShadow: 'none' }}
      >
        {/* <canvas id="myCanvas" width="1200" height="250"></canvas> */}
        <NavLink to={'/dayplaylist'}>
          {/* <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-day.png"
            alt="Playlist of the day"
          /> */}

          <AlbumCover text={text.albums.dayplaylist[lang]}></AlbumCover>
        </NavLink>
        <NavLink to={'/hits'}>
          {/* <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-hits.png"
            alt="Playlist of hits"
          /> */}
          <AlbumCover text={text.albums.hits[lang]}></AlbumCover>
        </NavLink>
        {/* <NavLink to={'/indie'}>
          <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-indie.png"
            alt="Indie charge"
          />
        </NavLink> */}
      </Card>
    </Box>
  );
};
