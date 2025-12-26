import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticationApi } from "../api/authentication";
import { setAuthenticated } from "../slices/authentication";

export const checkAuthorizationAsyncThunk = createAsyncThunk(
  "authentication/check",
  async (data: string, { dispatch }) => {
    const storedTokens = localStorage.getItem("_auth-data");
    if (!storedTokens) dispatch(authenticationThunk(data));
  },
);

export const authenticationThunk = createAsyncThunk(
  "authentication/login",
  async (data: string, { dispatch }) => {
    const result = await dispatch(
      authenticationApi.endpoints.login.initiate(data),
    );

    if ("data" in result) {
      localStorage.setItem(
        "_auth-data",
        JSON.stringify(result.data?.tokensPair),
      );
      localStorage.setItem("_user-data", JSON.stringify(result.data?.user));
      dispatch(setAuthenticated());
    }
  },
);
