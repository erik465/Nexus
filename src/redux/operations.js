import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://nexus-backend-jah5.onrender.com";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

//Authentification async operations
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      setAuthToken(res.data.data.user.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthToken(res.data.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

//User data operations

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/user/current");
    return res.data;
  } catch (e) {
    thunkAPI.rejectWithValue(e.message);
  }
});

//Tasks data operations

export const getTasks = createAsyncThunk(
  "user/getTasks",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/user/tasks");
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "user/addTask",
  async (task, thunkAPI) => {
    try {
      const res = await axios.post("/user/addTask", task);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompletedTask = createAsyncThunk(
  "user/toggleCompletedTask",
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`/user/toggleCompleted/${id}`);
      return res.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
