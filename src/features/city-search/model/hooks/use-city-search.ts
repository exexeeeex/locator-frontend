import { useGetCitiesByNameQuery } from "@entities/city";
import { useDebounce } from "@shared/lib/hooks";
import { useState } from "react";

export const useCitySearch = () => {
  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 500);

  const { data: searchedCities } = useGetCitiesByNameQuery(debouncedSearch, {
    skip: !debouncedSearch,
  });

  return {
    searchedCities,
    setSearchValue,
    searchValue,
    isOpenPopover,
    setIsOpenPopover,
  };
};
