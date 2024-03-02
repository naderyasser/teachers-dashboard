import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: "", isLoading: false };

export const signin = createAsyncThunk("signIn", async (args) => {
  let formdata = new FormData();
  formdata.append("username", args.username);
  formdata.append("password", args.password);

  let bodyContent = formdata;
  try {
    let reqOptions = {
      url: "https://eduazher.e3lanotopia.software/api/th/login",
      method: "POST",
      data: bodyContent,
    };
    let response = await axios.request(reqOptions);
    return response.data;
  } catch (err) {
    return console.log(err.message);
  }
});

const usersSlice = createSlice({
  name: "admin",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(signin.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default usersSlice.reducer;
