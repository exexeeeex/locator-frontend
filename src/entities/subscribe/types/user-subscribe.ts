import type { Subscribe } from "./subscribe";

export interface UserSubscribe {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	endDate: Date;
	userId: string;
	subscribe: Subscribe;
}
