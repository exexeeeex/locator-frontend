import { useMyProfile } from "@/features/profile";
import { MyProfileHeader } from ".";
import { ProfileBody } from "@/widgets/profile";
import { Error } from "@/shared/components";
import { ProfileProvider } from "@/widgets/profile/ui/context";
import { useErrorRedirect } from "@/shared/lib";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { Loader } from "@/shared/components/ui/loader";
import { motion, AnimatePresence } from "framer-motion";

export const MyProfile: React.FC = () => {
	const { profile, error, isLoading } = useMyProfile();

	useErrorRedirect(error, [{ status: 404, redirectTo: "/registration" }]);

	if (isLoading) {
		return (
			<div className='h-full flex items-center justify-center'>
				<Loader />
			</div>
		);
	}

	if (!profile) return <Error message='Профиль не найден' />;
	if (!profile.city)
		return <Error message='Ошибка получения информации профиля' />;

	return (
		<ProfileProvider
			error={error}
			profile={profile}
		>
			<AnimatePresence>
				<motion.div
					initial={{
						opacity: 0,
						y: 40,
						scale: 0.96,
						filter: "blur(8px)",
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
						filter: "blur(0px)",
					}}
					exit={{
						opacity: 0,
						y: 40,
						scale: 0.98,
						filter: "blur(8px)",
					}}
					transition={{
						duration: 0.55,
						delay: 0.08,
						ease: [0.22, 1, 0.36, 1],
					}}
					className='h-full'
				>
					<GlassCard
						glow
						className='mb-12 p-0'
					>
						<MyProfileHeader />
						<div className='mt-20 mb-7'>
							<ProfileBody />
						</div>
					</GlassCard>
				</motion.div>
			</AnimatePresence>
		</ProfileProvider>
	);
};
