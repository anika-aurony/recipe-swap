// redux/mealSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchMealData = createAsyncThunk('meal/fetchMealData', async (mealName) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  return response.data.meals;
});

export const fetchSortedMealData = createAsyncThunk('meal/fetchSortedMealData', async (mealName) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  const data = response.data.meals;
  const sortedData =data.slice().sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  console.log(sortedData)
  return sortedData;
});

export const fetchSingleMealData = createAsyncThunk('meal/fetchSingleMealData', async (id) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return response.data.meals;
});
export const fetchCategoryMealData = createAsyncThunk('meal/fetchCategoryMealData', async (category) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  return response.data.meals;
});
export const fetchIngredientMealData = createAsyncThunk('meal/fetchIngredientMealData', async (ingredient) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  return response.data.meals;
});


const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMealData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMealData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSingleMealData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleMealData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSingleMealData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSortedMealData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSortedMealData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSortedMealData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCategoryMealData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryMealData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategoryMealData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchIngredientMealData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIngredientMealData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchIngredientMealData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default mealSlice.reducer;
