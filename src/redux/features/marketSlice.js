import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { marketInfo } from 'constants/api';

export const getMarketData = createAsyncThunk(
  'market/getMarketData',
  async () => {
    const res = await axios.get(marketInfo()).then(({ data }) => {
      return data;
    });
    return res;
  }
);

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    marketData: [],
    loading: true,
    errors: [],
  },
  reducers: {},
  extraReducers: {
    [getMarketData.pending]: (state, action) => {
      state.loading = true;
    },
    [getMarketData.fulfilled]: (state, { payload }) => {
      state.marketData = payload.data;
      state.loading = false;
    },
    [getMarketData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.errors.push(payload);
    },
  },
});

export const marketReducer = marketSlice.reducer;
