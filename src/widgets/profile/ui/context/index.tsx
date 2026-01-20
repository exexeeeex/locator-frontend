import type { UserProfile } from "@/entities/user";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { createContext, useContext } from "react";

interface ProfileContextProps {
	profile: UserProfile;
	error: FetchBaseQueryError | SerializedError | undefined;
}

const ProfileContext = createContext<ProfileContextProps | null>(null);

export const ProfileProvider: React.FC<{
	profile: UserProfile;
	children: React.ReactNode;
	error: FetchBaseQueryError | SerializedError | undefined;
}> = ({ profile, children, error }) => {
	return (
		<ProfileContext.Provider value={{ profile, error }}>
			{children}
		</ProfileContext.Provider>
	);
};

export const useProfile = (): {
	profile: UserProfile;
	error: FetchBaseQueryError | SerializedError | undefined;
} => {
	const context = useContext(ProfileContext);
	if (!context)
		throw new Error("useProfile must be used within a ProfileProvider");
	return context;
};
