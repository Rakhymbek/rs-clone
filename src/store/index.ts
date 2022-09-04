import { configureStore } from '@reduxjs/toolkit';
import colorThemeReducer from './colorThemeSlice';
import languageReducer from './languageSlice';
import trackReducer from './trackSlice';
import { authReducer } from './auth/auth';
import modalReducer from './modalSlice';
import checkedItemsReducer from './checkedItemsSlice';
import sortedArraysReducer from './sortedArraysSlice';

const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    language: languageReducer,
    tracks: trackReducer,
    auth: authReducer,
    modal: modalReducer,
    checkedItems: checkedItemsReducer,
    sortedArrays: sortedArraysReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
