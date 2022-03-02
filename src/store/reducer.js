import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode:false,
}

export const mode = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    setDarkMode: (state,action) => {
      state.darkMode = action.payload
    },
    
    
  },
})


export const { setDarkMode } = mode.actions

export default mode.reducer