import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';

import './Main.css';
import { Player } from '../../components/Player/Player';
import { THeader } from '../../types';
import { TRACK, TRACKS } from '../../constants';
import { Box, styled } from '@mui/material';

const cnMain = cn('Main');

export type MainProps = {
  header: THeader;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`

export const Main: FC<MainProps> = ({ header }) => {
  return (
    <Wrapper className={cnMain('Wrapper')}>
      <Box sx={{display: 'flex'}} className={cnMain()}>
        <NavMenu />
        <Centerblock tracks={TRACKS} header={header}></Centerblock>
        <Sidebar isVisible={header === 'Треки'}></Sidebar>
        <Player track={TRACK}></Player>
      </Box>
    </Wrapper>
  );
};
