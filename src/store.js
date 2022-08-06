import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './Services/Api'
import id from './idSlice'
import loading from './loadingSlice'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    id: id,
    loading: loading
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(pokemonApi.middleware)
})
