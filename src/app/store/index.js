import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './features/loading'

export const store = configureStore({
  reducer: { loading: loadingReducer },
})
