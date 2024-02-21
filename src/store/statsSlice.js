import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  usersCount: "",
  lessonsCount: "",
  examsCount: "",
  views: "",
  codes: [],
  initCode: "",
};

export const getUsersCount = createAsyncThunk("getUsersCount", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_users_count"
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const getViews = createAsyncThunk("getViews", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_videos_views"
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const getLessonsCount = createAsyncThunk("getLessonsCount", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_lessons_count"
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const getExamsCount = createAsyncThunk("getExamsCount", async () => {
  try {
    const res = await axios.get(
      "https://scholarsync.e3lanotopia.software/api/th/get_exames_count"
    );
    return res.data;
  } catch (err) {
    return err.message;
  }
});
export const initCodes = createAsyncThunk("initCodes", async (args) => {
  try {
    let formdata = new FormData();
    formdata.append("value", args.value);
    formdata.append("num", args.num);

    let bodyContent = formdata;

    let reqOptions = {
      url: "https://scholarsync.e3lanotopia.software/api/th/init_codes",
      method: "POST",
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getUsersCount.fulfilled, (state, action) => {
      state.usersCount = action.payload;
    });
    builder.addCase(getViews.fulfilled, (state, action) => {
      state.views = action.payload;
    });
    builder.addCase(getLessonsCount.fulfilled, (state, action) => {
      state.lessonsCount = action.payload;
    });
    builder.addCase(getExamsCount.fulfilled, (state, action) => {
      state.examsCount = action.payload;
    });
    builder.addCase(initCodes.fulfilled, (state, action) => {
      state.initCode = action.payload;
    });
  },
});

export default usersSlice.reducer;
