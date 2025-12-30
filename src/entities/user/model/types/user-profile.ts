import type { City } from "@/entities/city";
import type { Gender } from "@/entities/gender";
import type { BaseEntity } from "@/shared/types";
import type { UserMedia } from ".";
import type { UserPurpose } from ".";

export interface UserProfile extends BaseEntity {
  username: string;
  birthday: Date;
  about: string;
  isActive: boolean;
  createdAt: Date;
  userId: string;
  city: City;
  gender: Gender;
  userMedias: UserMedia[];
  purpose: UserPurpose;
}
