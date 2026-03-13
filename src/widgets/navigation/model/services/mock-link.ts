import type { NavigationLink } from "..";

export const MOCK_LINK: NavigationLink[] = [
  {
    id: 1,
    name: "Анкеты",
    linkTo: "match-profiles",
    icon: "fire",
  },
  {
    id: 2,
    name: "Симпатии",
    linkTo: "sympathies",
    icon: "heart",
  },
  {
    id: 3,
    name: "Профиль",
    linkTo: "profile",
    icon: "profile",
  },
];

export const MOCK_LINK_MAP = MOCK_LINK.reduce(
  (acc, link) => {
    acc[link.id] = link;
    return acc;
  },
  {} as Record<number, NavigationLink>,
);
