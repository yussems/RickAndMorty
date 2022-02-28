import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode:false,
}

export const mode = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    darkmode: (state) => {
      state.darkMode = !state.darkMode
    },
    
    
  },
})


export const { darkmode,atıs } = mode.actions

export default mode.reducer