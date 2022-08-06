import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const loading = createSlice({
  name:'loading',
  initialState,
  reducers:{
    setLoaded: {
      reducer: (state, action) => {
        return true
      }
    },
  }
})

export const { setLoaded } = loading.actions
export default loading.reducer