import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  currentUser: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      return state;
    },
  },
});

export const { setCurrentUser } = appSlice.actions;
export const getCurrentUser = (state: RootState) => state.app;
export default appSlice.reducer;
