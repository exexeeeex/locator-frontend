import { type CreateComplaint, type ComplaintReason } from "../types";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const complaintApi = baseApi.injectEndpoints({
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
