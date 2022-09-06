import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { SongType } from "../types";
import dataTracks from "../pages/Main/data.json";

type TTrackState = {
  currentTrack: SongType;
  allTracks: SongType[];
  danceTracks: SongType[];
  randomTracks: SongType[];
  movedTracks: SongType[];
  favourites: SongType[];
  autoplay: boolean;
  isMoved: boolean;
  isShuffleActive: boolean;
};

const initialState: TTrackState = {
  currentTrack:
    JSON.parse(localStorage.getItem("currentTrack")!) || dataTracks[0] || {},
  allTracks: [],
  randomTracks: [],
  danceTracks: [],
  movedTracks: [],
  favourites: JSON.parse(localStorage.getItem("favourites")!) || [],
  isMoved: false,
  autoplay: false,
  isShuffleActive: false,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    changeCurrentSong(state, action: PayloadAction<SongType>) {
      state.autoplay = true;
      state.currentTrack = action.payload;
      localStorage.setItem("currentTrack", JSON.stringify(state.currentTrack));
    },
    uploadAllTracks(state, action: PayloadAction<SongType[]>) {
      state.allTracks = action.payload;
    },
    uploadDanceTracks(state, action: PayloadAction<SongType[]>) {
      state.danceTracks = action.payload;
    },
    uploadRandomTracks(state, action: PayloadAction<SongType[]>) {
      state.randomTracks = action.payload;
    },
    uploadMovedTracks(state, action: PayloadAction<SongType[]>) {
      state.movedTracks = action.payload;
    },
    addTrackToFavourites(state, action) {
      state.favourites = [...state.favourites, action.payload];
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    removeTrackFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        (favSong) => favSong.url !== action.payload.url
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    switchToNextTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let nextTrack: SongType;
      let allTracks: SongType[];

      if (state.isMoved) {
        allTracks = JSON.parse(JSON.stringify(state.movedTracks));
      } else {
        allTracks = action.payload;
      }

      let currentIndex = allTracks?.findIndex(
        (track) => track.url === state.currentTrack.url
      );
      if (currentIndex! >= allTracks?.length! - 1) {
        nextTrack = allTracks?.[0];
      } else {
        nextTrack = allTracks?.[currentIndex! + 1];
      }
      if (state.isShuffleActive) {
        let nextTrack =
          allTracks?.[Math.floor(Math.random() * allTracks.length)];
        state.currentTrack = nextTrack;
      } else {
        state.currentTrack = nextTrack;
      }
    },
    switchToPreviousTrack(state, action: PayloadAction<SongType[]>) {
      state.autoplay = true;
      let previousTrack;

      let allTracks: SongType[];

      if (state.isMoved) {
        allTracks = JSON.parse(JSON.stringify(state.movedTracks));
      } else {
        allTracks = action.payload;
      }

      let currentIndex = allTracks?.findIndex(
        (track) => track.url === state.currentTrack.url
      );
      if (currentIndex! <= 0) {
        previousTrack = allTracks?.[allTracks?.length! - 1];
      } else {
        previousTrack = allTracks?.[currentIndex! - 1];
      }
      state.currentTrack = previousTrack;
    },
    shuffleTracks(state, action) {
      if (action.payload) {
        let tracks = JSON.parse(JSON.stringify(state.allTracks));
        let nextTrack = tracks?.[Math.floor(Math.random() * tracks.length)];
        state.currentTrack = nextTrack;
      }
    },
    setShuffleStatus(state, action) {
      state.isShuffleActive = !action.payload;
    },
    setAutoplayStatus(state, action) {
      state.autoplay = action.payload;
    },
    setMovedStatus(state, action) {
      state.isMoved = action.payload;
    },
  },
});

export const {
  changeCurrentSong,
  uploadAllTracks,
  uploadDanceTracks,
  uploadRandomTracks,
  uploadMovedTracks,
  switchToNextTrack,
  switchToPreviousTrack,
  shuffleTracks,
  setShuffleStatus,
  setAutoplayStatus,
  setMovedStatus,
  addTrackToFavourites,
  removeTrackFromFavourites,
} = trackSlice.actions;

export default trackSlice.reducer;
