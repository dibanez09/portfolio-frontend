import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    app: appReducer
  },
  devTools: true
});
