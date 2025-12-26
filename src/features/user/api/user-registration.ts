import baseQueryWithReauth from "@/shared/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userRegistrationApi = createApi({
  reducerPath: "userRegistrationApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    registration: builder.mutation<void, FormData>({
      query: (body) => ({
        url: "user/create-profile",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = userRegistrationApi;
