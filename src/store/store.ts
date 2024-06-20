// store.js
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    // добавьте другие редукторы, если они у вас есть
  },
});

export default store;
