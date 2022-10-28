import { createSlice } from '@reduxjs/toolkit';
import { userData } from './userSliceModel';

const userSlice = createSlice({
  name: 'user',
  initialState: userData,
  reducers: {
    saveUser: (state, action) => {
      let localUserDetails = state.userDetails;

      localUserDetails = {
        ...state.userDetails,
        [action.payload.name]: action.payload.value,
      };

      state.userDetails = localUserDetails;
    },

    deleteData: (state) => {
      state.userDetails.email = '';
      state.userDetails.password = '';
      state.userDetails.name = '';
    },
  },
});

export const { saveUser, deleteData } = userSlice.actions;

export const userDetails = (state) => state.user.userDetails;

export default userSlice.reducer;
