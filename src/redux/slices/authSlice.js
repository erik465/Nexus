import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "../operations";

const initialState = {
  token: null,
  error: null,
  isLoading: false,
};

const handleFulfilled = (state, action) => {
  state.token = action.payload.token;
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logout.pending, handlePending)
      .addCase(logout.rejected, handleRejected)
      .addCase(logout.fulfilled, () => {
        this.state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setToken } = authSlice.actions;
