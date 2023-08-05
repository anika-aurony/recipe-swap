import { configureStore } from '@reduxjs/toolkit';
import mealReducer from "../slices/mealSlice"

const store = configureStore({
    reducer: {
      meal: mealReducer,
    },
  });
  
  export default store;