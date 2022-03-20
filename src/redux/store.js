import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './features/cryptosSlice';

export default configureStore({
  reducer: {
    cryptocurrency: CryptoReducer,
  },
});
