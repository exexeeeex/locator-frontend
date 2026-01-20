import { getTelegram } from "@/shared/platform/telegram";
import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { AuthenticationResponse } from "../types";

const tg = getTelegram();

export const authenticationApi = createApi({
	reducerPath: "authenticationApi",
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		login: builder.mutation<AuthenticationResponse, { initData: string }>({
			query: () => ({
				url: "authentication/telegram",
				method: "POST",
				body: {
					initData: tg.initData,
				},
			}),
		}),

		me: builder.query<{ user: { id: string } }, void>({
			query: () => "authentication/me",
		}),
	}),
});

export const { useLoginMutation, useMeQuery } = authenticationApi;
