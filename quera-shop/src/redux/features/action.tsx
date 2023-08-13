import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type tokenState = {
  token : string
};

const initialState = {
  token: localStorage.getItem("tokenCookie")? localStorage.getItem("tokenCookie") : "",
} as unknown as tokenState;

export const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("tokenCookie",action.payload);
    },
  },
});

export const {
  reset, setToken 
} = token.actions;
export default token.reducer;