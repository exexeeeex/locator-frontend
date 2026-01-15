import type { BaseEntity } from "@/shared/types";
import type { UserPurpose } from "../..";

export interface UserAdditional extends BaseEntity, UserPurpose {
	job: string;
	education: string;
}
