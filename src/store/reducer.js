import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  mode:false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    darkmode: (state) => {
      state.mode = !state.mode
    },
    
  },
})


export const { darkmode } = counterSlice.actions

export default counterSlice.reducer