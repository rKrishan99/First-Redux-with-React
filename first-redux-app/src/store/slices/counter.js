import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCountAction: (state, action) => {
        state.counterValue += 1;
        console.log(state, action.payload);
    },
    
  },
});

export const { handleIncreaseCountAction } = countSlice.actions;


export default countSlice.reducer;