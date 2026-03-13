import { useState } from "react";
import type { SympathiesLink, SympathiesPage } from "../types";

const links: SympathiesLink[] = [
  {
    name: "Лайки",
    page: "likes",
  },
  {
    name: "Мэтчи",
    page: "matches",
  },
];

export const useSympathiesNavigation = () => {
  const [page, setPage] = useState<SympathiesPage>("likes");

  const switchPage = (page: SympathiesPage) => setPage(page);

  return {
    page,
    switchPage,
    links,
    activeLink: page,
  };
};
