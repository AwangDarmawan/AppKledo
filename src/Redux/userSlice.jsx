// ===== File: src/redux/userSlice.js =====
import { createSlice } from '@reduxjs/toolkit';


const storedUser = localStorage.getItem('USER');
const storedToken = localStorage.getItem('TOKEN');

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken || null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
//   {
//     user: null,
//     token: null,
//   },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
       localStorage.removeItem('USER');
      localStorage.removeItem('TOKEN');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;