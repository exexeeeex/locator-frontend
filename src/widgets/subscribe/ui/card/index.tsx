import type { Subscribe } from "@/entities/subscribe/types/subscribe";
import type { UserSubscribe } from "@/entities/subscribe/types/user-subscribe";
import { BuySubscribeButton } from "@/features/subscribe/ui";
import { Button, Icon } from "@/shared/components";
import { Badge } from "@/shared/components/ui/badge";
import { GlassCard } from "@/shared/components/ui/glass-card";
import { cn } from "@/shared/lib/utils";
import { DetailItem } from "@/widgets/profile";
import { memo } from "react";

interface SubscribeCardProps {
	plan: Subscribe;
	userSubscribe?: UserSubscribe;
}

export const SubscribeCard = memo<SubscribeCardProps>(
	({ plan, userSubscribe }) => {
		const isPremium = plan.name.toLowerCase() === "premium";
		const isActive = userSubscribe?.subscribe.id === plan.id;

		return (
			<GlassCard
				glow={isPremium}
				className='relative  overflow-hidden select-none p-6'
			>
				<div
					className={cn(
						"absolute inset-0 opacity-30 pointer-events-none",
						isPremium
							? "bg-linear-to-br from-primary/30 via-accent/20 to-transparent"
							: "bg-linear-to-br from-muted/20 to-transparent",
					)}
				/>

				<div className='flex items-center justify-between'>
					<Badge
						variant='outline'
						className={cn(
							"gap-2 px-3 py-1 backdrop-blur-xl",
							isPremium ? "border-primary/40 text-primary" : "",
						)}
					>
						<Icon
							size={14}
							icon='fire'
						/>
						{plan.name.toUpperCase()}
					</Badge>

					{isActive && (
						<Badge className='bg-green-500/15 text-green-400 border-green-500/30'>
							Активна
						</Badge>
					)}
				</div>

				<div className='mt-6'>
					<h1 className='text-4xl font-bold tracking-tight'>{plan.name}</h1>

					<p className='text-sm text-muted-foreground mt-2 leading-relaxed'>
						{plan.description}
					</p>
				</div>

				<div className='mt-6 flex items-end gap-2'>
					<span className='text-5xl font-extrabold tracking-tight'>
						{plan.price}
					</span>
					<span className='text-muted-foreground pb-1'>₽ / мес</span>
				</div>

				<div className='mt-6 space-y-2'>
					<DetailItem
						icon='star'
						title='Приоритет в рекомендациях'
						value='Больше показов'
					/>
					<DetailItem
						icon='heart'
						title='Лайки'
						value={`До ${plan.features.maxLikesPerDay} в день`}
					/>
					<DetailItem
						icon='profile'
						title='Просмотры профиля'
						value={`${plan.features.maxProfileViewsPerDay} в день`}
					/>
				</div>

				{isActive ? (
					<Button
						className={cn(
							"w-full mt-6 rounded-xl font-semibold text-base text-foreground transition",
							isPremium
								? "bg-linear-to-r from-primary to-accent hover:opacity-95"
								: "bg-muted hover:bg-muted/80 ",
						)}
					>
						Управлять подпиской
					</Button>
				) : (
					<BuySubscribeButton plan={plan} />
				)}

				<div className='text-xs text-muted-foreground text-center mt-3'>
					Отмена в любой момент
				</div>
			</GlassCard>
		);
	},
);
