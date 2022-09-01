import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box, styled } from '@mui/material';

import { NavMenu } from './NavMenu/NavMenu';
import { Sidebar } from './SIdebar/Sidebar';
import { Centerblock } from './Centerblock/Centerblock';
import { Player } from '../../components/Player/Player';
import { text } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hook';
import { SongType } from '../../types';
import { fetchTracks } from '../../fetchers/fetchTracks';
import { uploadAllTracks } from '../../store/trackSlice';
import { getSortedByArtistsArray } from '../../utils/getSortedByArtistsArray';
import { getSortedByGenresArray } from '../../utils/getSortedByGenresArray';
import { getSortedByYearsArray } from '../../utils/getSortedByYearsArray';
import { getArtistsArray } from '../../utils/getArtistsArray';
import { getGenresArray } from '../../utils/getGenresArray';
import { getYearsArray } from '../../utils/getYearsArray';

const cnMain = cn('Main');

export type MainProps = {
  header: string;
};

const Wrapper = styled(Box)`
  max-width: 100%;
`;

export const Main: FC<MainProps> = ({ header }) => {
  const dispatch = useAppDispatch();

  const currentTrack = useAppSelector((state) => state.tracks.currentTrack);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const allTracksLocal = JSON.parse(localStorage.getItem('allTracks') || '[]');
  const allTracks = allTracksLocal || allTracksStore;

  const [tracks, setTracks] = useState<SongType[]>(allTracks);

  const lang = useAppSelector((state) => state.language.lang);
  const bgColor = useAppSelector((state) => state.colorTheme.bgColor);

  useEffect(() => {
    if (allTracksLocal?.length) {
      dispatch(uploadAllTracks(allTracksLocal));
      setTracks(allTracksLocal);
    } else {
      fetchTracks().then((data) => {
        setTracks(data);
        localStorage.setItem(
          'sortedArtistsArray',
          JSON.stringify(getArtistsArray(getSortedByArtistsArray(data))),
        );
        localStorage.setItem(
          'sortedGenreArray',
          JSON.stringify(getGenresArray(getSortedByGenresArray(data))),
        );
        localStorage.setItem(
          'sortedYearsArray',
          JSON.stringify(getYearsArray(getSortedByYearsArray(data))),
        );
        dispatch(uploadAllTracks(data));
      });
    }
  }, [dispatch]);

  return (
    <Wrapper style={{ backgroundColor: bgColor }}>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '1920px',
          minHeight: '100vh',
          margin: '0 auto',
        }}
        className={cnMain()}
      >
        <NavMenu />
        <Centerblock tracks={tracks} header={header}></Centerblock>
        <Sidebar
          isVisible={header === text.header.tracks[lang]}
          isUserVisible={header !== text.menu.profile[lang]}
        ></Sidebar>
      </Box>
      <Player track={currentTrack}></Player>
    </Wrapper>
  );
};
