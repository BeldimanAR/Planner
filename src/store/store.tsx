// LIBRARIES
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

// SLICES
import coreSlice from 'slice/CoreSlice/coreSlice';
import headerUserSlice from 'slice/HeaderUserSlice/headerUserSlice';
import userSlice from 'slice/UserDataSlice/userSlice';
import LoginCheckSlice from 'slice/LoginCheckSlice/LoginCheckSlice';
import DashboardNumbersSlice from 'slice/DashboardNumbersUpdateSlice/DashboardNumbersSlice';

const reducers = combineReducers({
  core: coreSlice,
  test: headerUserSlice,
  user: userSlice,
  loginCheck: LoginCheckSlice,
  dashboardNumbers: DashboardNumbersSlice,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
