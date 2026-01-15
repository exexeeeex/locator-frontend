import { useAppSelector } from "@/shared/lib";

export const useUserId = (): string | null => {
	const state = useAppSelector((state) => state);

	return state.authentication?.user?.id || null;
};
