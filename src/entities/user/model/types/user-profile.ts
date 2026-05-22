import type { City } from "@/entities/city";
import type { Gender } from "@/entities/gender";
import type { BaseEntity } from "@/shared/types";
import type { User, UserAdditional, UserMedia } from ".";
import type { UserPurpose } from ".";
import type { Interest } from "@/entities/interest";

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
	userAdditional: UserAdditional;
	selectedInterests: { id: string; userInterest: Interest }[];
	user: User;
}
