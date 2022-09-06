import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongType } from '../types';

type TCheckedItems = {
  checkedArtists: string[];
  checkedYears: string[];
  checkedGenres: string[];
  searchedTracks: SongType[];
  searchedTracksDance: SongType[];
  searchedTracksRandom: SongType[];
  searchedTracksFavourites: SongType[];
  filteredTracks: SongType[];
  filteredDanceTracks: SongType[];
  filteredRandomTracks: SongType[];
  filteredFavouritesTracks: SongType[];
};

const initialState: TCheckedItems = {
  checkedArtists: [],
  checkedYears: [],
  checkedGenres: [],
  searchedTracks: [],
  searchedTracksDance: [],
  searchedTracksRandom: [],
  searchedTracksFavourites: [],
  filteredTracks: [],
  filteredDanceTracks: [],
  filteredRandomTracks: [],
  filteredFavouritesTracks: [],
};

const filteredItemsSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    updateCheckedArtists(state, action: PayloadAction<string[]>) {
      state.checkedArtists = action.payload;
    },
    updateCheckedYears(state, action: PayloadAction<string[]>) {
      state.checkedYears = action.payload;
    },
    updateCheckedGenres(state, action: PayloadAction<string[]>) {
      state.checkedGenres = action.payload;
    },

    updateSearchedTracks(state, action: PayloadAction<SongType[]>) {
      state.searchedTracks = action.payload;
    },
    updateSearchedTracksDance(state, action: PayloadAction<SongType[]>) {
      state.searchedTracksDance = action.payload;
    },
    updateSearchedTracksRandom(state, action: PayloadAction<SongType[]>) {
      state.searchedTracksRandom = action.payload;
    },
    updateSearchedTracksFavourites(state, action: PayloadAction<SongType[]>) {
      state.searchedTracksFavourites = action.payload;
    },

    updateFilteredTracks(state, action: PayloadAction<SongType[]>) {
      state.filteredTracks = action.payload;
    },
    updateFilteredDanceTracks(state, action: PayloadAction<SongType[]>) {
      state.filteredDanceTracks = action.payload;
    },
    updateFilteredRandomTracks(state, action: PayloadAction<SongType[]>) {
      state.filteredRandomTracks = action.payload;
    },
    updateFilteredFavouritesTracks(state, action: PayloadAction<SongType[]>) {
      state.filteredFavouritesTracks = action.payload;
    },
  },
});

export const {
  updateCheckedArtists,
  updateCheckedYears,
  updateCheckedGenres,
  updateSearchedTracks,
  updateSearchedTracksDance,
  updateSearchedTracksRandom,
  updateSearchedTracksFavourites,
  updateFilteredTracks,
  updateFilteredDanceTracks,
  updateFilteredRandomTracks,
  updateFilteredFavouritesTracks,
} = filteredItemsSlice.actions;

export default filteredItemsSlice.reducer;
