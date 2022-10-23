import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ContentSlice from './redux/ContentSlice';

const rootReducer = combineReducers({ content: ContentSlice.reducer });
const store = configureStore({ reducer: rootReducer });

export default store;
