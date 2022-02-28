import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './reducer'

export const store = configureStore({
    reducer: {
        mode: modeReducer,
      },
})