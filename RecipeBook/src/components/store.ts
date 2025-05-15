import { create } from "zustand";

//TypeScript interface 
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}
//This defines the shape of the Zustand store.
interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}
// create<RecipeStore>: creates the Zustand store with the type RecipeStore (from the interface above).
//set: a built-in Zustand function to update the store.
//useStore: is the custom hook name (you'll use this in your app).
const useStore = create<RecipeStore>((set) => ({

  //Starts with empty recipe list, addRecipe adds new recipe to the list. set: updates the store,...state.recipes: keeps old recipes , recipes: adds new one
  recipes: [], 
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useStore;
