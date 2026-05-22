import baseQueryWithReauth from "@/shared/lib/api/base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { CityResponse } from "../types/cities-response";

// Redux Toolkit Query API slice для работы с городами
export const cityApi = createApi({
	// Уникальный ключ для этого API слайса
	reducerPath: "cityApi",
	// Базовый запрос с поддержкой повторной аутентификации
	baseQuery: baseQueryWithReauth,
	// Теги для автоматического обновления данных при изменении
	tagTypes: ["City"],
	// Определение эндпоинтов для получения данных о городах
	endpoints: (builder) => ({
		// Эндпоинт для получения всех городов
		getAllCities: builder.query<CityResponse[], void>({
			query: () => "city/get-all",
			providesTags: ["City"],
		}),
		// Эндпоинт для получения городов по имени
		getCitiesByName: builder.query<CityResponse[], string>({
			query: (name: string) => ({
				url: "city/get-by-name",
				params: { name: name },
			}),
		}),
	}),
});

export const { useGetAllCitiesQuery, useGetCitiesByNameQuery } = cityApi;
