import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  regions: string[];
  categories: string[];
}

const initialState: FiltersState = {
  regions: [],
  categories: []
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setRegions: (state, action: PayloadAction<string[]>) => {
      state.regions = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setRegions, setCategories } = filtersSlice.actions;

export default filtersSlice.reducer;
