import type { AuthenticationResponse } from "@/features/authentication";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
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
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("_auth-data", JSON.stringify(data.tokensPair));
          localStorage.setItem("_user-data", JSON.stringify(data.user));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authenticationApi;
