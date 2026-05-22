import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { type CreateComplaint, type ComplaintReason } from "../types";

export const complaintApi = createApi({
	reducerPath: "complaintApi",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Complaints"],
	endpoints: (builder) => ({
		getComplaintReasons: builder.query<ComplaintReason[], void>({
			query: () => ({
				url: `complaint-reasons/get-all`,
			}),
			providesTags: ["Complaints"],
		}),
		createComplaint: builder.mutation<void, CreateComplaint>({
			query: (complaint) => ({
				url: `complaints/send`,
				method: "POST",
				body: complaint,
			}),
		}),
	}),
});

export const { useGetComplaintReasonsQuery, useCreateComplaintMutation } =
	complaintApi;
