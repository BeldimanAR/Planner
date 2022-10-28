// LIBRARIES
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './DashboardNumbersSliceModel';
import {
  deadlinesData,
  availablePersonsData,
  startDatesData,
} from 'mocks/dashboardMocks';

export const DashboardNumbersSlice = createSlice({
  name: 'dashboardNumbers',
  initialState,
  reducers: {
    changeDashboardNumbers: (state) => {
      state.projectsStarting = startDatesData.length;
      state.projectsEnding = deadlinesData.length;
      state.personsNumber = availablePersonsData.length;
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

export const { changeDashboardNumbers } = DashboardNumbersSlice.actions;

export const personsNumber = (state) => state.dashboardNumbers.personsNumber;
export const projectsEnding = (state) => state.dashboardNumbers.projectsEnding;
export const projectsStarting = (state) =>
  state.dashboardNumbers.projectsStarting;

export default DashboardNumbersSlice.reducer;
