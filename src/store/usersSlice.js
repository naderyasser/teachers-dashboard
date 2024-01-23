import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { users: [] };

export const getAllUsers = createAsyncThunk("users/getAllYsers", async () => {
  try {
    const res = await axios.get("http://127.0.0.1:3030/api/th/get_all_users");
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

// export const getAllUsers = createAsyncThunk("users/getAllYsers", async () => {
//   let headersList = {
//     Accept: "*/*",
//   };

//   let reqOptions = {
//     url: "http://127.0.0.1:3030/api/th/get_all_users",
//     method: "GET",
//     headers: headersList,
//   };

//   let response = await axios.request(reqOptions);
//   console.log(response.data);
//   return response;
// });

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { sayHello } = usersSlice.actions;
export default usersSlice.reducer;
