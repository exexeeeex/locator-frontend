import { useState } from "react";

export const useProfileAbout = () => {
	const [open, setOpen] = useState<boolean>(false);

	return {
		open,
		setOpen,
	};
};
