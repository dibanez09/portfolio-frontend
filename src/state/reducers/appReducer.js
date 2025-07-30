import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    preloading: true,
    backendURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:81',
    landingPageSpline: import.meta.env.VITE_LANDING_PAGE_SPLINE,
    error: null
  },
  reducers: {
    setPreloading: (state, action) => {
      state.preloading = action.payload;
    }
  }
});

export const { setPreloading } = appSlice.actions;

export default appSlice.reducer;
