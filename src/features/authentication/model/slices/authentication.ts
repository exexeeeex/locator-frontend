import { createSlice } from "@reduxjs/toolkit";
import { authenticationApi } from "..";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("_auth-data");
      localStorage.removeItem("_user-data");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authenticationApi.endpoints.login.matchFulfilled,
      (state) => {
        state.isAuthenticated = true;
      },
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
