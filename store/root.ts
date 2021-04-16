import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./data.slice";

const rootReducer = combineReducers({
  data: dataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
