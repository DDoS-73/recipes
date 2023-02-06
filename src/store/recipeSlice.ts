import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RecipeModel } from '../common/models/Recipe.model';

export interface RecipesState {
  recipes: RecipeModel[];
}

const initialState: RecipesState = {
  recipes: []
};

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<RecipeModel[]>) => {
      state.recipes = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
