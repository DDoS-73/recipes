import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = !!localStorage.getItem('token');

export const authSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;
