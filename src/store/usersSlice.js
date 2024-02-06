import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  err: null,
  courses: [],
  oneUser: [],
  isLoading: false,
};

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_all_users"
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const getAllCourses = createAsyncThunk("getAllCources", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_all_courses"
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const getOneUser = createAsyncThunk("getOneUser", async (args) => {
  try {
    const res = await axios.get(
      `https://scholarsync.e3lanotopia.software/api/th/search/${args}`
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const SearchByYearSectionLocation = createAsyncThunk(
  "SearchByYearSectionLocation",
  async (args) => {
    try {
      const res = await axios.get(
        `https://scholarsync.e3lanotopia.software/api/th/get_users/${args.year}/${args.section}/${args.location}`
      );
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(SearchByYearSectionLocation.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      state.oneUser = action.payload;
    });
  },
});

export const { wow } = usersSlice.actions;
export default usersSlice.reducer;
