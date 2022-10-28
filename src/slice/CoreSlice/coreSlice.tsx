// LIBRARIES
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './coreSliceModel';

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    handleToogleSideMenu: (state) => {
      state.showSideMenu = !state.showSideMenu;
    },
    resetToogleSideMeny: (state) => {
      state.showSideMenu = false;
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

export const { handleToogleSideMenu, resetToogleSideMeny } = coreSlice.actions;

export const showSideMenu = (state) => state.core.showSideMenu;

export default coreSlice.reducer;
