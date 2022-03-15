import { createSlice } from '@reduxjs/toolkit'

export const calcSlice = createSlice(
  name: 'calc',
  initialState: {
    input1: 0,
    input2: 0,
    total: 0
  },
  reducers:{
    add: (state, action) => {
      state.total = action.payload.input1 + action.payload.input2;
    },
    sub: (state, action) => {
      state.total = action.payload.input1 - action.payload.input2;
    },
    mult: (state, action) => {
      state.total = action.payload.input1 * action.payload.input2;
    },
    div: (state, action) => {
      state.total = action.payload.input1 / action.payload.input2;
    }
  }
)

export const {
  add, mult, div, sub
} = calcSlice.actions;

export default calcSlice.reducer;