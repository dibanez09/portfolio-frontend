import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    preloading: true,
    backendURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:81',
    landingPageSpline: import.meta.env.VITE_LANDING_PAGE_SPLINE,
    breakPoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    scroll: {
      y: 0,
      x: 0
    },
    navigations: [
      { title: 'Home', link: '/' },
      { title: 'About', link: '/about' },
      { title: 'Portfolio', link: '/portfolio' },
      { title: 'Contact', link: '/contact' }
    ],
    error: null
  },
  reducers: {
    setPreloading: (state, action) => {
      state.preloading = action.payload;
    },
    updateProperty: (state, action) => {
      try {
        const { path, value } = action.payload;
        const keys = path.split('.');
        const res = keys.reduceRight((acc, key, i) => {
          if (i === keys.length - 1) {
            return { [key]: value };
          } else {
            return { [key]: acc };
          }
        }, value);
      } catch (error) {
        console.error('error updating property', error);
      }
    }
  }
});

export const { setPreloading, updateProperty } = appSlice.actions;

export default appSlice.reducer;
