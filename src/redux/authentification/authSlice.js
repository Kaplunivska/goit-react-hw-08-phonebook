import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, logIn, logOut } from './operations';
import { fetchCurrentUser } from 'redux/authentification/operations';
const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefetchingCurrentUser: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerNewUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerNewUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefetchingCurrentUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;
