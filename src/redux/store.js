import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer from './features/cryptosSlice';
import userReducer from './features/userSlice';

export default configureStore({
  reducer: {
    cryptocurrency: CryptoReducer,
    user: userReducer,
  },
});
