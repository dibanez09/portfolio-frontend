import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/users/info');
  return response.data.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    status: 'idle', // 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
