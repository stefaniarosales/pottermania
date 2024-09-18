import { createSlice } from '@reduxjs/toolkit'

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    showScrollButton: false,
  },
  reducers: {
    toggleScrollButton: (state, action) => {
      state.showScrollButton = action.payload;
    },
  },
});

export const { toggleScrollButton } = scrollSlice.actions
export default scrollSlice.reducer
