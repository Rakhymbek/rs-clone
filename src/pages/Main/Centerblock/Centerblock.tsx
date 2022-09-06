import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Box, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SongType } from '../../../types';
import { ALBUM_DANCE, ALBUM_FAVOURITES, ALBUM_RANDOM, TEXT } from '../../../constants';
import { Profile } from '../Profile/Profile';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { TrackList } from '../TrackList/TrackList';
import { FilterButtons } from '../../../components/FilterButtons/FilterButtons';
import { getSearchQueryArray } from '../../../utils/getSearchQueryArray';
import {
  updateFilteredDanceTracks,
  updateFilteredFavouritesTracks,
  updateFilteredRandomTracks,
  updateFilteredTracks,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksFavourites,
  updateSearchedTracksRandom,
} from '../../../store/filteredItemsSlice';
import { getFinalItems } from '../../../utils/getFinalItems';
import { updateSearchQuery } from '../../../store/sortingSettingsSlice';
import { SkeletonTrack } from '../../../components/SkeletonTrack/SkeletonTrack';
import { ListHeaders } from '../../../components/ListHeaders/ListHeaders';

import './Centerblock.css';

const cnCenterblock = cn('Centerblock');

type PlayerProps = {
  tracks: SongType[];
  header: string;
};

export const Centerblock: FC<PlayerProps> = ({ header, tracks }) => {
  const dispatch = useAppDispatch();

  const lang = useAppSelector((state) => state.language.lang);
  const textColor = useAppSelector((state) => state.colorTheme.textColor);
  const order = useAppSelector((state) => state.sortingSettings.order);

  const allTracksStore = useAppSelector((state) => state.tracks.allTracks);
  const allTracksDance: SongType[] = useAppSelector(
    (state) => state.tracks.danceTracks,
  );
  const allTracksRandom: SongType[] = useAppSelector(
    (state) => state.tracks.randomTracks,
  );

  const allTracksFavourites = useAppSelector((state) => state.tracks.favourites);


  const checkedItems = useAppSelector((state) => state.filteredItems);

  const array = new Array(10).fill(0);

  const [value, setValue] = useState('');

  useEffect(() => {
    return () => setValue('');
  }, [header]);

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);

    let allTracks = allTracksStore;

    const searchedItems = getSearchQueryArray(e.currentTarget.value, allTracks);

    dispatch(updateSearchQuery(e.currentTarget.value));
    dispatch(updateSearchedTracks(searchedItems));

    const finalItems = getFinalItems(
      allTracks,
      checkedItems,
      searchedItems,
      order,
    );
    dispatch(updateFilteredTracks(finalItems));

    if (header === TEXT.albums[ALBUM_DANCE][lang]) {
      const searchedItemsDance = getSearchQueryArray(
        e.currentTarget.value,
        allTracksDance,
      );

      dispatch(updateSearchQuery(e.currentTarget.value));
      dispatch(updateSearchedTracksDance(searchedItemsDance));

      const finalItems = getFinalItems(
        allTracksDance,
        checkedItems,
        searchedItemsDance,
        order,
      );

      dispatch(updateFilteredDanceTracks(finalItems));
    }

    if (header === TEXT.albums[ALBUM_RANDOM][lang]) {
      const searchedItemsRandom = getSearchQueryArray(
        e.currentTarget.value,
        allTracksRandom,
      );

      dispatch(updateSearchQuery(e.currentTarget.value));
      dispatch(updateSearchedTracksRandom(searchedItemsRandom));

      const finalItems = getFinalItems(
        allTracksRandom,
        checkedItems,
        searchedItemsRandom,
        order,
      );

      dispatch(updateFilteredRandomTracks(finalItems));
    }
    
    if (header === TEXT.albums[ALBUM_FAVOURITES][lang]) {
      const searchedItemsFavourites = getSearchQueryArray(
        e.currentTarget.value,
        allTracksFavourites,
      );

      dispatch(updateSearchQuery(e.currentTarget.value));
      dispatch(updateSearchedTracksFavourites(searchedItemsFavourites));

      const finalItems = getFinalItems(
        allTracksFavourites,
        checkedItems,
        searchedItemsFavourites,
        order,
      );

      dispatch(updateFilteredFavouritesTracks(finalItems));
    }
  };

  if (header === TEXT.menu.profile[lang]) {
    return <Profile />;
  } else {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className={cnCenterblock()}>
          <form className={cnCenterblock('Input-Wrapper')}>
            <TextField
              value={value}
              onChange={(e) => handleSearch(e)}
              InputLabelProps={{}}
              placeholder={TEXT.searchInput[lang]}
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
                    <Search
                      style={{ color: textColor }}
                      className={cnCenterblock('Input')}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <h2 style={{ color: textColor }} className={cnCenterblock('Header')}>
            {header}
          </h2>
          {header === TEXT.header.tracks[lang] && (
            <FilterButtons lang={lang} textColor={textColor}></FilterButtons>
          )}

          <Box className={cnCenterblock('Content')}>
            <ListHeaders></ListHeaders>

            {!tracks.length ? (
              array.map((_, i) => (
                <SkeletonTrack key={i.toString()}></SkeletonTrack>
              ))
            ) : (
              <TrackList header={header}></TrackList>
            )}
          </Box>
        </div>
      </DndProvider>
    );
  }
};
