import type { BaseEntity } from "@/shared/types";

export interface User extends BaseEntity {
	telegramId: string;
	username: string;
	id: string;
}
