import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    themeMode: 'light'
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
  export const { setThemeMode } = slice.actions; 

export default slice.reducer;
  