import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMarketData = createAsyncThunk(
  'market/getMarketData',
  async () => {
    const res = await axios
      .get('https://api.coingecko.com/api/v3/global')
      .then(({ data }) => {
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
    [getMarketData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const marketReducer = marketSlice.reducer;
