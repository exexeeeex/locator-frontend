import type { User, UserProfile } from "@/entities/user";
import { GlassCard } from "@/shared/components/ui/glass-card";
import {
	SympathiesLikeCardActions,
	SympathiesLikeCardBody,
	SympathiesLikeCardHeader,
} from "./components";
import { LikeCardContext } from "./context";
import { motion } from "framer-motion";

type Props = {
	profile: UserProfile;
	isLike: boolean;
	user?: User;
	to: string;
};

export const SympathiesLikeCard: React.FC<Props> = ({
	profile,
	isLike,
	user,
	to,
}) => {
	const userInfo = user ?? { id: "null", username: "null", telegramId: "null" };

	return (
		<LikeCardContext.Provider value={{ profile, isLike, user: userInfo, to }}>
			<motion.div
				layout
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.5 }}
				className='relative overflow-hidden group mt-4'
			>
				<GlassCard className='w-full p-4'>
					<SympathiesLikeCardHeader />
					<SympathiesLikeCardBody />
					<SympathiesLikeCardActions />
				</GlassCard>
			</motion.div>
		</LikeCardContext.Provider>
	);
};
