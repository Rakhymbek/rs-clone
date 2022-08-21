import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Sidebar.css';
import { USER } from '../../../constants';
import { NavLink } from 'react-router-dom';
import { Box, Card, CardMedia, Typography } from '@mui/material';

const cnSidebar = cn('Sidebar');

export type SidebarProps = {
  isVisible: boolean;
};

export const Sidebar: FC<SidebarProps> = ({ isVisible }) => {
  return (
    <Box className={cnSidebar()}>
      <div className={cnSidebar('User')}>
        <Typography className={cnSidebar('User-Name')}>{USER.name}</Typography>
        <div className={cnSidebar('User-Avatar')}></div>
      </div>
      <Card
        className={cnSidebar('List')}
        sx={
          isVisible
            ? { display: "block", backgroundColor: "transparent" }
            : { display: "none" }
        }
      >
        <NavLink to={'/dayplaylist'}>
          <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-day.png"
            alt="Playlist of the day"
          />
        </NavLink>
        <NavLink to={"/hits"}>
          <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-hits.png"
            alt="Playlist of hits"
          />
        </NavLink>
        <NavLink to={"/indie"}>
          <CardMedia
            component="img"
            className={cnSidebar('Button')}
            image="./playlist/playlist-indie.png"
            alt="Indie charge"
          />
        </NavLink>
      </Card>
    </Box>
  );
};
