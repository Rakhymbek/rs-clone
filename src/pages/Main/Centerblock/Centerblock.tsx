import React, { useCallback } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import {
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { Search, AccessTime, FavoriteBorder } from '@mui/icons-material';

import { FilterButton } from '../../../components/FilterButton/FilterButton';
import {
  colorToSecondary,
  extradarkToDark,
  extradarkToHover,
} from '../../../utils/utils';
import { SongType } from '../../../types';
import { text } from '../../../constants';
import { Profile } from '../Profile/Profile';
import { useAppDispatch, useAppSelector } from '../../../hook';

import './Centerblock.css';
import { DivChangeColor } from '../../../components/changeColor/DivChangeColor/DivChangeColor';
import { changeCurrentSong } from '../../../store/trackSlice';

const cnCenterblock = cn('Centerblock');
const cnContent = cn('Content');

export type PlayerProps = {
  tracks: SongType[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const textColorSecondary = colorToSecondary(textColor);
  const decorativeColor = useAppSelector(
    (state) => state.colorTheme.decorativeColor,
  );

  const colorHover = extradarkToHover(decorativeColor);
  const colorDark = extradarkToDark(decorativeColor);

  const handleChooseSong = useCallback((track: SongType) => {
    dispatch(changeCurrentSong(track))
  }, [dispatch]);


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
              input: { color: textColor },
              label: { color: textColor, pl: '30px' },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ color: textColor }} position="start">
                  <Search style={{ color: textColor }} />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <Typography variant="h2" marginBottom={6} style={{ color: textColor }}>
          {header}
        </Typography>
        {header === text.header.tracks[lang] && (
          <Box
            className={cnCenterblock('Filters')}
            style={{ color: textColor }}
          >
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
              style={{ color: textColorSecondary }}
            >
              {text.listHeader.track[lang]}
            </span>
            <span
              className={cnContent('Singer')}
              style={{ color: textColorSecondary }}
            >
              {text.listHeader.artist[lang]}
            </span>
            <span
              className={cnContent('Album')}
              style={{ color: textColorSecondary }}
            >
              {text.listHeader.album[lang]}
            </span>
            <SvgIcon fontSize="small" sx={{ my: 'auto', ml: 'auto' }}>
              <AccessTime />
            </SvgIcon>
          </div>

          {tracks?.map((track) => (
            <DivChangeColor
              color={textColor}
              colorHover={colorHover}
              colorActive={colorDark}
              className={cnContent('Track-Info')}
              key={track._id}
              onClick={() => handleChooseSong(track)}
            >
              <img
                className={cnContent('Track-Icon')}
                style={{ color: textColorSecondary }}
                src="./icons/note.svg"
                alt="note"
              ></img>

              <span className={cnContent('Track-Name')}>{track.title}</span>

              <span className={cnContent('Track-Author')}>{track.artist}</span>
              <span
                className={cnContent('Track-Album')}
                style={{ color: textColorSecondary }}
              >
                {track.album}
              </span>
              <IconButton
                sx={{ width: '5%' }}
                style={{ color: textColorSecondary }}
              >
                <FavoriteBorder fontSize="small" />
              </IconButton>
              <span
                className={cnContent('Track-Duration')}
                style={{ color: textColorSecondary }}
              >
                {/* {secondsToHms(track.duration_in_seconds)} */}
                {track?.duration}
              </span>
            </DivChangeColor>
          ))}
        </Box>
      </div>
    );
  }
};
