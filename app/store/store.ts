import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducer';


const store = configureStore({
  reducer: filterReducer,
});

export default store;
