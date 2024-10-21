import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCountAction: () => {},
  },
});

export const { handleIncreaseCountAction } = countSlice.actions;


export default countSlice.reducer;