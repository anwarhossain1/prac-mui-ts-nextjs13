
import { combineReducers } from '@reduxjs/toolkit';
import { reducer as themeModeReducer } from '../slices/themeChange';

export const rootReducer = combineReducers({
  themeMode: themeModeReducer
});