import { createSlice} from "@reduxjs/toolkit";



const initialState = {
  token: localStorage.getItem("tokenAdmin")? sessionStorage.getItem("tokenAdmin") : "",
  userData: localStorage.userdata ? JSON.parse(sessionStorage.userdata) : {}
};

export const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: () => initialState,
    setToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem("tokenAdmin",action.payload);
    },
    setUserData:(state,action)=>{
     state.userData=action.payload
     sessionStorage.userdata=JSON.stringify(action.payload)
    }
  },
});

export const {
  reset, setToken, setUserData
} = token.actions;
export default token.reducer;