import { getTelegram } from "@/shared/platform/telegram";

import type { AuthenticationResponse } from "../types";
import { baseApi } from "@/shared/lib/api/store/base-api";

const tg = getTelegram();

export const authenticationApi = baseApi.injectEndpoints({
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
