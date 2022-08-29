import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongType } from "../types";

type TTrackState = {
  currentTrack: SongType;
  allTracks: SongType[];
  autoplay: boolean;
};

const initialState: TTrackState = {
  currentTrack: {},
  allTracks: [],
  autoplay: false,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    changeCurrentSong(state, action: PayloadAction<SongType>) {
      state.autoplay = true;
      state.currentTrack = action.payload;
    },
    uploadAllTracks(state, action: PayloadAction<SongType[]>) {
      state.allTracks = action.payload;
    },
    switchToNextTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let nextTrack;
      let currentIndex = action.payload?.findIndex(
        (track) => track.url === state.currentTrack.url
      );
      if (currentIndex! >= action.payload?.length! - 1) {
        nextTrack = action.payload?.[0];
      } else {
        nextTrack = action.payload?.[currentIndex! + 1];
      }
      state.currentTrack = nextTrack;
    },
    switchToPreviousTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let previousTrack;
      let currentIndex = action.payload?.findIndex(
        (track) => track.url === state.currentTrack.url
      );
      if (currentIndex! <= 0) {
        previousTrack = action.payload?.[action.payload?.length! - 1];
      } else {
        previousTrack = action.payload?.[currentIndex! - 1];
      }
      state.currentTrack = previousTrack;
    }
  },
});

export const { changeCurrentSong, uploadAllTracks, switchToNextTrack, switchToPreviousTrack } = trackSlice.actions;

export default trackSlice.reducer;
