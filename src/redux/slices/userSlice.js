import { createSlice } from "@reduxjs/toolkit";
import { getUser, getTasks, toggleCompletedTask } from "../operations";

const initialState = {
  data: null,
  tasks: null,
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.rejected, handleRejected)
      .addCase(getUser.pending, handlePending)
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTasks.rejected, handleRejected)
      .addCase(getTasks.pending, handlePending)
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(toggleCompletedTask.rejected, handleRejected)
      .addCase(toggleCompletedTask.pending, handlePending);
  },
});

export const userReducer = userSlice.reducer;
