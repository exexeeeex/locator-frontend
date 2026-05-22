import { useMatches } from "@/entities/match";
import { Error } from "@/shared/components";
import { Loader } from "@/shared/components/ui/loader";
import { SympathiesLikeCard } from "../like-card";
import { GlassCard } from "@/shared/components/ui/glass-card";

export const SympathiesMatches = () => {
	const { data, isLoading, error } = useMatches();

	if (error) return <Error message='Не удалось загрузить мэтчи' />;
	if (isLoading)
		return (
			<div className='h-full flex items-center justify-center'>
				<Loader />
			</div>
		);

	return (
		<div>
			{data && data.length >= 1 ? (
				data.map((match) => (
					<SympathiesLikeCard
						isLike={false}
						key={match.id}
						profile={match.profile}
						user={match.user}
						to={match.to}
					/>
				))
			) : (
				<div className='h-full flex items-center justify-center'>
					<GlassCard
						glow
						className='mt-[35vh] flex items-center justify-center'
					>
						<h1 className=' text-muted-foreground font-semibold text-xl'>
							Мэтчей нет!💔
						</h1>
					</GlassCard>
				</div>
			)}
		</div>
	);
};
