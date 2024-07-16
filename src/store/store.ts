import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import filterReducer from './reducer';

export const api = createAPI();

const store = configureStore({
  reducer: filterReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
