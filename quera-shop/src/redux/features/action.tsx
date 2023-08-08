import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type tokenState = {
  token : string,
  refreshToken : string
};

const initialState = {
  token : "",
  refreshToken : ""
} as tokenState;

export const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});

export const {
  reset, setToken, setRefreshToken, 
} = token.actions;
export default token.reducer;