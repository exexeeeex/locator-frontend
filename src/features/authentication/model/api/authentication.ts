import type { AuthenticationResponse } from "@/entities/authentication";
import baseQueryWithReauth from "@/shared/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<AuthenticationResponse, string>({
      query: (data: string) => ({
        url: "authentication/telegram",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-telegram-init-data": data,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authenticationApi;
