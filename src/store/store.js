import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import statsSlice from "./statsSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    stats: statsSlice,
  },
});
