import { create } from 'zustand';


 export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

// when using zustand and trying to export 
// it does not support the export default name at the end
// but use export at the start: export const useRecipeStore