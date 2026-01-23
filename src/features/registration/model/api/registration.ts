import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const registrationApi = createApi({
	reducerPath: "userRegistrationApi",
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({
		registration: builder.mutation<void, FormData>({
			query: (body) => ({
				url: "user-profile/create-profile",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useRegistrationMutation } = registrationApi;
