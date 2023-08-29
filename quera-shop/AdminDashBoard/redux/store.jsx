import { configureStore } from "@reduxjs/toolkit";
import  tokenReducer from "./features/action";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

