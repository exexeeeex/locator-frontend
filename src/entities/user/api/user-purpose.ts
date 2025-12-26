import baseQueryWithReauth from "@/shared/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { UserPurposeResponse } from "../models";

export const userPurposeApi = createApi({
  reducerPath: "userPurposeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Purpose"],
  endpoints: (builder) => ({
    getUserPurposes: builder.query<UserPurposeResponse[], void>({
      query: () => "user/get-purposes",
      providesTags: ["Purpose"],
    }),
  }),
});

export const { useGetUserPurposesQuery } = userPurposeApi;
