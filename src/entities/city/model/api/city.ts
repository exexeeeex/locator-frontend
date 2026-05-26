import type { CityResponse } from "../types/cities-response";
import { baseApi } from "@/shared/lib/api/store/base-api";

export const cityApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllCities: builder.query<CityResponse[], void>({
			query: () => "city/get-all",
			providesTags: ["City"],
		}),
		getCitiesByName: builder.query<CityResponse[], string>({
			query: (name: string) => ({
				url: "city/get-by-name",
				params: { name: name },
			}),
		}),
	}),
});

export const { useGetAllCitiesQuery, useGetCitiesByNameQuery } = cityApi;
