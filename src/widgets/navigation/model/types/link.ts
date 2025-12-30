import type { IconType } from "@/shared/types";

export interface NavigationLink {
  id: number;
  name: string;
  linkTo: string;
  icon: IconType;
}
