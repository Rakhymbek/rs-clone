import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuth: any = createAsyncThunk('auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchRegister: any = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);
  return data;
});

export const fetchAuthMe: any = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});
const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state: any) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state: any, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state: any) => {
      state.status = 'error';
      state.data = null;
    },
    [fetchAuthMe.pending]: (state: any) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state: any, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state: any) => {
      state.status = 'error';
      state.data = null;
    },
    [fetchRegister.pending]: (state: any) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state: any, action: any) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state: any) => {
      state.status = 'error';
      state.data = null;
    },
  },
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
