import { baseQuery } from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

type PingResponse = {
	start: string;
	message: string;
	end: string;
};

export const pingApi = createApi({
	reducerPath: "pingApi",
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		ping: builder.query<PingResponse, void>({
			query: () => `ping`,
		}),
	}),
});

export const { usePingQuery } = pingApi;
