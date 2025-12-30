import { MOCK_LINK } from "..";

export const useLinks = () => {
  const links = MOCK_LINK.length >= 1 ? MOCK_LINK : [];

  return {
    links,
  };
};
