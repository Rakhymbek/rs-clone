import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';

import './Main.css';
import { Player } from '../../components/Player/Player';
import { BGCOLOR, text, TRACK, TRACKS, lang } from '../../constants';
import { Box, styled } from '@mui/material';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  return (
    <Wrapper style={{ backgroundColor: BGCOLOR }} className={cnMain('Wrapper')}>
      <Box sx={{ display: 'flex' }} className={cnMain()}>
        <NavMenu />
        <Centerblock tracks={TRACKS} header={header}></Centerblock>
        <Sidebar
          isVisible={header === text.header.tracks[lang]}
          isUserVisible={header !== text.menu.profile[lang]}
        ></Sidebar>
        <Player track={TRACK}></Player>
      </Box>
    </Wrapper>
  );
};
