import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpoints } from 'data/endpoints';

export const getCryptocurrencies = createAsyncThunk(
  'crypto/getCryptocurrencies',
  async () => {
    const res = await axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(({ data }) => {
        return data;
      });
    // console.log(res);
    return res;
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    entities: [],
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [getCryptocurrencies.pending]: (state, action) => {
      state.loading = true;
    },
    [getCryptocurrencies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
      console.log(state.entities);
    },
    [getCryptocurrencies.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const cryptoReducer = cryptoSlice.reducer;
