import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

export const idSlice = createSlice({
  name:'id',
  initialState,
  reducers:{
    incId: {
      reducer: (state, action) => {
        return state+1
      }
    },
    decId:{
      reducer: (state, action) => {
        return Math.max(1, state-1)
      }
    }
  }
})

export const { incId, decId } = idSlice.actions
export default idSlice.reducer