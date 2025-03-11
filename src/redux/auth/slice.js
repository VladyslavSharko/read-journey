import { createSlice } from "@reduxjs/toolkit";
import {
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    email: "",
    name: "",
  },
  token: localStorage.getItem("token"),
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = { email: action.payload.email, name: action.payload.name };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = { email: action.payload.email, name: action.payload.name };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(logoutThunk.fulfilled, () => {
        localStorage.removeItem("token");
        return initialState;
      });
  },
});

export const authReducer = slice.reducer;
