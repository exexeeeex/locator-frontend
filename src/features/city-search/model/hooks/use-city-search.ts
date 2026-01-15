import { notifyService } from "@/shared/services";
import { useGetCitiesByNameQuery } from "@entities/city";
import { useDebounce } from "@shared/lib/hooks";
import { useEffect, useState } from "react";

export const useCitySearch = () => {
	const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState("");
	const debouncedSearch = useDebounce(searchValue, 500);
	const { notifyError } = notifyService;

	const {
		data: searchedCities,
		error,
		isError,
	} = useGetCitiesByNameQuery(debouncedSearch, {
		skip: !debouncedSearch,
	});

	useEffect(() => {
		if (isError && error) {
			let errorMessage = "Ошибка при поиске городов";

			if ("data" in error && error.data) {
				const errorData = error.data as unknown as { message?: string };
				errorMessage = errorData.message || errorMessage;
			} else if (error instanceof Error) {
				errorMessage = error.message;
			}

			notifyError(errorMessage);
			console.error("City search error:", error);
		}
	}, [isError, error, notifyError]);

	return {
		searchedCities,
		setSearchValue,
		searchValue,
		isOpenPopover,
		setIsOpenPopover,
	};
};
