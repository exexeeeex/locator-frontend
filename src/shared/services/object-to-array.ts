export const objectToArray = <T>(
	object: Record<string, T>,
): Array<{ key: string; value: T }> => {
	return Object.keys(object).map((key) => ({
		key,
		value: object[key],
	}));
};
