import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../base-query";

export const baseApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	tagTypes: [
		"MyProfile",
		"UserProfile",
		"City",
		"Complaints",
		"Interactions",
		"Interest",
		"InterestByName",
		"Matches",
		"Candidates",
		"ProfileAbout",
		"ProfileQuality",
		"ProfileMedias",
		"Subscribes",
		"UserInterests",
		"UserPurpose",
	],
	endpoints: () => ({}),
});
