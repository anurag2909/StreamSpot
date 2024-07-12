import { createSlice } from "@reduxjs/toolkit";

const descSlice = createSlice({
  name: "desc",
  initialState: {
    isDescOpen: false,
  },
  reducers: {
    openDesc: (state) => {
      state.isDescOpen = !state.isDescOpen;
    },
  },
});

export const { openDesc } = descSlice.actions; 
export default descSlice.reducer;
