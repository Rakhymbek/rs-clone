import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Centerblock.css';
import { FilterButton } from '../../../components/FilterButton/FilterButton';
import { TTrack } from '../../../types';
import { secondsToHms } from '../../../utils/utils';
import {
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Search, AccessTime, FavoriteBorder } from '@mui/icons-material';
import { COLOR, COLOR_SECONDARY, text, lang } from '../../../constants';
import { Profile } from '../Profile/Profile';

const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

export type PlayerProps = {
  tracks: TTrack[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  if (header === text.menu.profile[lang]) {
    return <Profile />;
  } else {
    return (
      <div className={cnCenterblock()}>
        <form className={cnCenterblock('Input-Wrapper')}>
          <TextField
            InputLabelProps={{}}
            placeholder={text.searchInput[lang]}
            fullWidth
            autoComplete="off"
            variant="standard"
            type={'search'}
            sx={{
              mt: '5px',
              input: { color: COLOR },
              label: { color: COLOR, pl: '30px' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ color: COLOR }} position="start">
                  <Search style={{ color: COLOR }} />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <Typography variant="h2" marginBottom={6} style={{ color: COLOR }}>
          {header}
        </Typography>
        {header === text.header.tracks[lang] && (
          <Box className={cnCenterblock('Filters')} style={{ color: COLOR }}>
            <span className={cnCenterblock('Filters-Text')}>
              {text.search.searchBy[lang]}
            </span>
            <FilterButton buttonText={text.search.artist[lang]}></FilterButton>
            <FilterButton buttonText={text.search.release[lang]}></FilterButton>
            <FilterButton buttonText={text.search.genre[lang]}></FilterButton>
          </Box>
        )}
        <Box className={cnCenterblock('Content')}>
          <div className={cnContent('Header')}>
            <span
              className={cnContent('Track')}
              style={{ color: COLOR_SECONDARY }}
            >
              {text.listHeader.track[lang]}
            </span>
            <span
              className={cnContent('Singer')}
              style={{ color: COLOR_SECONDARY }}
            >
              {text.listHeader.artist[lang]}
            </span>
            <span
              className={cnContent('Album')}
              style={{ color: COLOR_SECONDARY }}
            >
              {text.listHeader.album[lang]}
            </span>
            <SvgIcon fontSize="small" sx={{ my: 'auto', ml: 'auto' }}>
              <AccessTime />
            </SvgIcon>
          </div>

          {tracks.map((track) => (
            <div
              className={cnContent('Track-Info')}
              style={{ color: COLOR }}
              key={track.name + track.author + track.album}
            >
              <img
                className={cnContent('Track-Icon')}
                style={{ color: COLOR_SECONDARY }}
                src="./icons/note.svg"
                alt="note"
              ></img>
              <span className={cnContent('Track-Name')}>{track.name}</span>
              <span className={cnContent('Track-Author')}>{track.author}</span>
              <span
                className={cnContent('Track-Album')}
                style={{ color: COLOR_SECONDARY }}
              >
                {track.album}
              </span>
              <IconButton
                sx={{ width: '5%' }}
                style={{ color: COLOR_SECONDARY }}
              >
                <FavoriteBorder fontSize="small" />
              </IconButton>
              <span
                className={cnContent('Track-Duration')}
                style={{ color: COLOR_SECONDARY }}
              >
                {secondsToHms(track.duration_in_seconds)}
              </span>
            </div>
          ))}
        </Box>
      </div>
    );
  }
};
