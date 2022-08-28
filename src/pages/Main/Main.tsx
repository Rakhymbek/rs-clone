import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box, styled } from '@mui/material';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { text, TRACK, TRACKS } from '../../constants';
import { useAppSelector } from '../../hook';

import './Main.css';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  const lang = useAppSelector((state) => state.language.lang);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

  return (
    <Wrapper style={{ backgroundColor: bgColor }} className={cnMain('Wrapper')}>
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
