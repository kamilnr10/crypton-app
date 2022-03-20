import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { endpoints } from 'data/endpoints';

export const getCryptocurrencies = createAsyncThunk(
  'cryptocurrrencies/getCryptocurrencies',
  async () => {
    return axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => console.log(data));
  }
);

const cryptosSlice = createSlice({
  name: 'cryptocurrencies',
  initialState: {
    cryptocurrencies: [],
    loading: false,
  },
  extraReducers: {
    [getCryptocurrencies.pending]: (state, action) => {
      state.loading = true;
    },
    [getCryptocurrencies.fulfilled]: (state, action) => {
      state.loading = false;
      state.cryptocurrencies = action.payload;
    },
    [getCryptocurrencies.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default cryptosSlice.reducer;
