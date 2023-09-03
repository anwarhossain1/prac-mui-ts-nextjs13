import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeMode: ''
  };

  const slice = createSlice({
    name:'theme-mode',
    initialState,
    reducers:{
        setThemeMode(state, action){
            state.themeMode = action.payload
        }
    }
  })
  export const { reducer } = slice;