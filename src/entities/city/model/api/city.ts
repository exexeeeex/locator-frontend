import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { CityResponse } from "../types/cities-response";

export const cityApi = createApi({
  reducerPath: "cityApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["City"],
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
