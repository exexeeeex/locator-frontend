import type { User, UserProfile } from "@/entities/user";
import type { InteractionType } from "./interaction-type";

export interface LikeResponse {
	id: string;
	profile: UserProfile;
	user: User;
	to: string;
	type?: InteractionType;
}
