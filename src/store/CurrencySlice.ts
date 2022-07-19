/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type CurrencyState = {
  usd: number,
  eur: number,
  pln: number,
  isLoading: boolean,
};

const initialState: CurrencyState = {
  usd: 0,
  eur: 0,
  pln: 0,
  isLoading: false,
};

export const fetchUsd = createAsyncThunk<number, undefined>(
  'usd/fetchUsd',
  async () => {
    const response = await fetch('https://api.exchangerate.host/convert?from=UAH&to=USD');

    if (!response.ok) {
      throw new Error('Server Error');
    }

    const data = await response.json();

    return data.result;
  },
);

export const fetchEur = createAsyncThunk<number, undefined>(
  'eur/fetchEur',
  async () => {
    const response = await fetch('https://api.exchangerate.host/convert?from=UAH&to=EUR');

    if (!response.ok) {
      throw new Error('Server Error');
    }

    const data = await response.json();

    return data.result;
  },
);

export const fetchPln = createAsyncThunk<number, undefined>(
  'pln/fetchPln',
  async () => {
    const response = await fetch('https://api.exchangerate.host/convert?from=UAH&to=PLN');

    if (!response.ok) {
      throw new Error('Server Error');
    }

    const data = await response.json();

    return data.result;
  },
);

const CurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
  },
  extraReducers: (build) => {
    build
      .addCase(fetchUsd.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsd.fulfilled, (state, action) => {
        state.usd = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEur.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEur.fulfilled, (state, action) => {
        state.eur = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPln.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPln.fulfilled, (state, action) => {
        state.pln = action.payload;
        state.isLoading = false;
      });
  },
});

export default CurrencySlice.reducer;
