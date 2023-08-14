import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type tokenState = {
  token : string
  ,userData:any
};

const initialState = {
  token: localStorage.getItem("tokenCookie")? localStorage.getItem("tokenCookie") : "",
  userData:localStorage.userdata ? JSON.parse(localStorage.userdata):{}
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
    setUserData:(state,action:PayloadAction<string>)=>{
     state.token=action.payload
     localStorage.userdata=JSON.stringify(action.payload)
    }
  },
});

export const {
  reset, setToken 
} = token.actions;
export default token.reducer;