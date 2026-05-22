export interface Subscribe {
	id: string;
	name: string;
	description: string;
	price: number;
	features: {
		maxLikesPerDay: number;
		maxProfileViewsPerDay: number;
		canUseAdditionalFilters: boolean;
	};
	createdAt: Date;
	updatedAt: Date;
}
