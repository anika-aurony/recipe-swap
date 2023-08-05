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

export const fetchSingleMealData = createAsyncThunk('meal/fetchSingleMealData', async (id) => {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
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
      });
  },
});

export default mealSlice.reducer;
