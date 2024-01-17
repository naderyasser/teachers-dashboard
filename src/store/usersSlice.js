import { createSlice } from "@reduxjs/toolkit";

const initialState = ["usrerone", "usertow"];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sayHello: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { sayHello } = usersSlice.actions;
export default usersSlice.reducer;
