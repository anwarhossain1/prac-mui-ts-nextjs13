
import { combineReducers } from '@reduxjs/toolkit';
import themeModeReducer from '../slices/themeChange';

export const rootReducer = combineReducers({
  themeMode: themeModeReducer
});