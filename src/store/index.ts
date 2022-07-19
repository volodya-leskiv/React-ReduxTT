import { configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './CurrencySlice';

const store = configureStore({
  reducer: {
    currency: CurrencyReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
