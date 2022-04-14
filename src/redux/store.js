import { configureStore } from '@reduxjs/toolkit';
import { cryptoReducer } from './features/cryptosSlice';
import { marketReducer } from './features/marketSlice';
import userReducer from './features/userSlice';

export default configureStore({
  reducer: {
    crypto: cryptoReducer,
    market: marketReducer,
    user: userReducer,
  },
});
