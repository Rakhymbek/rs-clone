import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';

import './Main.css';
import { Player } from '../../components/Player/Player';
import { text, TRACK, TRACKS } from '../../constants';
import { Box, styled } from '@mui/material';
import { useAppSelector } from '../../hook';
import { AlbumType, SongType, TLanguages } from '../../types';
import { fetchTracks } from '../../fetchers/fetchTracks';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  const [tracks, setTracks] = useState<SongType[]>();
  const currentTrack = useAppSelector((state) => state.tracks.currentTrack)
  const lang = useAppSelector((state) => state.language.lang);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

  useEffect(() => {
    fetchTracks().then(data => {
      setTracks(data);
    });
  }, []);

  return (
    <Wrapper style={{ backgroundColor: bgColor }} className={cnMain('Wrapper')}>
      <Box sx={{ display: 'flex' }} className={cnMain()}>
        <NavMenu />
        <Centerblock tracks={tracks as SongType[]} header={header}></Centerblock>
        <Sidebar
          isVisible={header === text.header.tracks[lang]}
          isUserVisible={header !== text.menu.profile[lang]}
        ></Sidebar>
        <Player track={currentTrack}></Player>
      </Box>
    </Wrapper>
  );
};
