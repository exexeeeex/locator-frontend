export const fileHelper = {
	filterNewFiles: (newFiles: File[], existingFiles: File[]): File[] => {
		const existingFileNames = existingFiles.map((file) => file.name);
		return newFiles.filter((file) => !existingFileNames.includes(file.name));
	},
	validateFileCount: (
		currentCount: number,
		newCount: number,
		maxCount: number,
	): boolean => currentCount + newCount <= maxCount,
};
