import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tokens: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setVariable: (state, action: PayloadAction<[]>) => {
      state.tokens = action.payload;
    },
  },
});

export const { setVariable: setTokens } = dataSlice.actions;
export default dataSlice.reducer;
