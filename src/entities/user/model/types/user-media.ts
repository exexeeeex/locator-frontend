import type { BaseEntity } from "@/shared/types";

export interface UserMedia extends BaseEntity {
  link: string;
  userProfileId: string;
}
