import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ORDER } from '../constants';
import { TOrder } from '../types';

type TTrackState = {
  artists: string[];
  genres: string[];
  years: string[];
  order: TOrder;
  searchQuery: string;
  // album: string;
};

const initialState: TTrackState = {
  artists: [],
  genres: [],
  years: [],
  order: ORDER.notSelected as TOrder,
  searchQuery: '',
  // album: '',
};

const sortingSettingsSlice = createSlice({
  name: 'sortingSettings',
  initialState,
  reducers: {
    updateSortedArtists(state, action: PayloadAction<string[]>) {
      state.artists = action.payload;
    },
    updateSortedYears(state, action: PayloadAction<string[]>) {
      state.years = action.payload;
    },
    updateSortedGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
    updateOrder(state, action: PayloadAction<TOrder>) {
      state.order = action.payload;
    },
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    // updateSelectedAlbum(state, action: PayloadAction<string>) {
    //   state.album = action.payload;
    // },
  },
});

export const {
  updateSortedArtists,
  updateSortedYears,
  updateSortedGenres,
  updateOrder,
  updateSearchQuery,
  // updateSelectedAlbum,
} = sortingSettingsSlice.actions;

export default sortingSettingsSlice.reducer;
