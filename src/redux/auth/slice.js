import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    email: "",
    name: "",
  },
  token: "",
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
      });
  },
});

export const authReducer = slice.reducer;
