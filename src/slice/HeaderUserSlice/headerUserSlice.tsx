// LIBRARIES
import { createSlice } from '@reduxjs/toolkit';
import { headerUserName } from './headerUserSliceModel';

export const headerUserSlice = createSlice({
  name: 'test',
  initialState: headerUserName,
  reducers: {
    handleUserName: (state) => {
      state.userName = 'Alexandru B.';
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

export const { handleUserName } = headerUserSlice.actions;

export const userName = (state) => state.test.userName;

export default headerUserSlice.reducer;
