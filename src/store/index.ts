import { configureStore } from '@reduxjs/toolkit';
import colorThemeReducer from './colorThemeSlice';
import languageReducer from './languageSlice';
import trackReducer from './trackSlice';
import { authReducer } from './auth/auth';
import modalReducer from './modalSlice';
import filteredItemsReducer from './filteredItemsSlice';
import sortingSettingsReducer from './sortingSettingsSlice';
import headerReducer from './headerSlice';
import vpnReducer from './vpnSlice';

const store = configureStore({
  reducer: {
    vpn: vpnReducer,
    colorTheme: colorThemeReducer,
    language: languageReducer,
    auth: authReducer,
    modal: modalReducer,
    tracks: trackReducer,
    filteredItems: filteredItemsReducer,
    sortingSettings: sortingSettingsReducer,
    header: headerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
