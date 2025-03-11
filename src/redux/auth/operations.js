import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken } from "../../config/api";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signin", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/signout");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUserThunk = createAsyncThunk("getUser", async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;
  if (savedToken === null) {
    return thunkAPI.rejectWithValue("Token is not exist!");
  }

  try {
    setToken(savedToken);
    const data = await api.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
