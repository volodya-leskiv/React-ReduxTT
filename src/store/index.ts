// import { configureStore, createReducer } from '@reduxjs/toolkit';
// // eslint-disable-next-line import/extensions,import/no-unresolved
// import { State } from '../react-app-env';
// import { setLoadData } from './actions';
//
// export type AppDispatch = typeof store.dispatch;
// export const initialState: State = {
//   loadData: {
//     date: '',
//     base: '',
//     symbols: '',
//     amount: 0,
//   },
// };
// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setLoadData, (state, action) => {
//       // eslint-disable-next-line no-param-reassign
//       state.loadData = action.payload;
//     });
// });
//
// export const store = configureStore({ reducer });
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
