// LIBRARIES
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './LoginCheckSliceModel';

export const LogInCheckSlice = createSlice({
  name: 'loginCheck',
  initialState,
  reducers: {
    handleToogleLoginCheck: (state) => {
      state.loginCheck = !state.loginCheck;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(handleLogin.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(handleLogin.fulfilled, (state, action) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(handleLogin.rejected, (state, action) => {
    //   state.isLoading = false;
    // });
  },
});

export const { handleToogleLoginCheck } = LogInCheckSlice.actions;

export const loginCheck = (state) => state.loginCheck.loginCheck;

export default LogInCheckSlice.reducer;
