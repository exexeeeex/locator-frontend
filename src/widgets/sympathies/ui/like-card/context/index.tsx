import type { User, UserProfile } from "@/entities/user";
import { createContext, useContext } from "react";

type LikeCardContextType = {
	profile: UserProfile;
	user: User;
	isLike: boolean;
	to: string;
};

export const LikeCardContext = createContext<LikeCardContextType | null>(null);

export const useLikeCardContext = () => {
	const context = useContext(LikeCardContext);

	if (!context) {
		throw new Error(
			"useLikeCardContext must be used within SympathiesLikeCard",
		);
	}

	return context;
};
