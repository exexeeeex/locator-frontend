import { profileApi, useMyProfile } from "@/features/profile";
import {
	Icon,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/components";
import { MyProfileAvatarModal } from "..";
import { useState } from "react";
import { useAppSelector } from "@/shared/lib";
import { useSubscribe } from "@/features/subscribe/model/hooks";
import { cn } from "@/shared/lib/utils";

import { Link } from "react-router-dom";

export const MyProfileAvatar: React.FC = () => {
	const { userMedias, profile } = useMyProfile();

	const state = useAppSelector(
		(state) => profileApi.endpoints.getMyProfile.select()(state).data,
	);

	const { userSubscribe } = useSubscribe(state?.userId || "");

	const avatar = () =>
		userMedias?.length ? `${userMedias.find((um) => um.isPriority)?.link}` : "";
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<div
				className='
      			  w-35 h-35
      			  rounded-full
      			  bg-card
      			  p-1
      			  shadow-lg
				  relative
      			'
			>
				<Popover>
					<PopoverTrigger asChild>
						<div
							className={cn(
								userSubscribe
									? userSubscribe.subscribe.name === "Premium"
										? `
										bg-linear-to-br
										from-primary
										via-primary/90
										to-accent
										shadow-[0_0_20px_rgba(168,85,247,0.45)]
									  `
										: `
										bg-linear-to-br
										from-zinc-500
										to-zinc-700
									  `
									: `
										bg-linear-to-br
										from-amber-400
										via-orange-400
										to-amber-500
										shadow-[0_0_18px_rgba(251,191,36,0.35)]
					  				`,
								`
									z-20
									select-none
									rounded-full
									w-9 h-9
									p-1
									absolute
									bottom-0 left-4

									flex items-center justify-center

									border border-white/10
									backdrop-blur-md

									transition-all duration-200
									hover:scale-105
									active:scale-95
								`,
							)}
						>
							<Icon
								icon='fire'
								size={17}
								className='text-white'
							/>
						</div>
					</PopoverTrigger>

					<PopoverContent
						sideOffset={12}
						className='
							w-72
							rounded-2xl
							border-border/40
							bg-card/95
							backdrop-blur-xl
							p-0
							overflow-hidden
						'
					>
						<div
							className={cn(
								userSubscribe
									? userSubscribe.subscribe.name === "Premium"
										? "bg-linear-to-r from-primary to-accent"
										: "bg-linear-to-r from-zinc-600 to-zinc-800"
									: "bg-linear-to-r from-amber-400 to-orange-500",
								"px-4 py-3 text-white",
							)}
						>
							<div className='flex items-center gap-2'>
								<div
									className='
										w-8 h-8
										rounded-full
										bg-white/15
										flex items-center justify-center
									'
								>
									<Icon
										icon='fire'
										size={15}
									/>
								</div>

								<div>
									<h4 className='font-semibold text-sm'>
										{userSubscribe ? userSubscribe.subscribe.name : "Premium"}
									</h4>

									<p className='text-xs text-white/80'>
										{userSubscribe
											? "Подписка активна"
											: "Откройте premium-возможности"}
									</p>
								</div>
							</div>
						</div>

						<div className='p-4 space-y-4'>
							{userSubscribe ? (
								<div
									className='
										flex items-center justify-between
										rounded-xl
										bg-secondary
										px-3 py-2.5
									'
								>
									<div>
										<p className='text-xs text-muted-foreground'>
											Действует до
										</p>

										<p className='text-sm font-medium mt-0.5'>
											{new Date(userSubscribe.endDate).toLocaleDateString(
												"ru-RU",
												{
													day: "2-digit",
													month: "long",
													year: "numeric",
												},
											)}
										</p>
									</div>

									<div className='text-primary text-xl'>⚡</div>
								</div>
							) : (
								<div
									className='
										rounded-xl
										bg-secondary
										p-3
										text-sm
										text-muted-foreground
									'
								>
									• Больше показов профиля <br />
									• Premium badge <br />• Приоритет в рекомендациях
								</div>
							)}

							<Link to='/subscribe'>
								<button
									className={cn(
										userSubscribe
											? `
								bg-linear-to-r
								from-primary
								to-accent
							  `
											: `
								bg-linear-to-r
								from-amber-400
								to-orange-500
							  `,
										`
								w-full
								h-11
								rounded-xl

								font-medium
								text-white
								text-sm

								transition-all duration-200
								hover:opacity-95
								active:scale-[0.98]
								`,
									)}
								>
									{userSubscribe ? "Продлить подписку" : "Купить Premium"}
								</button>
							</Link>
						</div>
					</PopoverContent>
				</Popover>
				<img
					src={avatar() || undefined}
					alt='user-avatar'
					className='
        			  w-full h-full
        			  rounded-full
        			  object-cover
        			  bg-muted
        			'
				/>
				<div
					onClick={() => setOpen(!open)}
					className='bg-muted/80 border-border/40 border 
					bottom-0 right-2 
					w-9 h-9 
					flex justify-center items-center 
					rounded-full absolute'
				>
					<Icon
						icon={"camera"}
						size={18}
						className='-mt-1.5'
					/>
				</div>
			</div>

			<MyProfileAvatarModal
				open={open}
				onOpenChange={setOpen}
				profileId={profile ? profile.id : ""}
				userMedia={userMedias}
			/>
		</>
	);
};
