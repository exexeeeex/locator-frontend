import { useUserId } from "@/entities/user/model/hooks";
import { useProfileAbout } from "@/features/profile/model/hooks";
import { Icon, Modal, Textarea } from "@/shared/components";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { cn } from "@/shared/lib/utils";
import { useProfile } from "../context";

export const ProfileAbout: React.FC = () => {
	const id = useUserId();
	const { profile } = useProfile();
	const {
		open: openModal,
		setOpen: setOpenModal,
		register,
		watch,
		handleUpdateProfileAboutField,
	} = useProfileAbout();

	const aboutValue = watch("about") ?? "";
	const isOwner = id === profile.userId;

	return (
		<>
			<div
				className={cn(
					"group relative  overflow-hidden rounded-2xl border p-4",
					"transition-all duration-300",
					"border-white/6 bg-card/40 hover:bg-white/6 hover:border-white/10",
				)}
			>
				<div className='flex items-start justify-between '>
					<SectionHeader
						icon='profile'
						label='Обо мне'
						gradient='from-primary/10 to-primary/10'
						className='rounded-lg mb-2'
					/>

					{isOwner && (
						<button
							onClick={() => setOpenModal(true)}
							className={cn(
								"relative z-10 group flex items-center gap-2 rounded-xl border-2 border-muted-foreground/10 bg-muted/10 px-3 py-1.5",
								"text-[13px] font-medium text-muted-foreground transition-all duration-300",
								"hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
								"hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]",
							)}
						>
							<Icon
								icon='pen'
								size={15}
								className='opacity-70 group-hover:opacity-100'
							/>
							<span>Изменить</span>
						</button>
					)}
				</div>

				<div className='relative rounded-xl border border-white/5 bg-muted/80 px-3 pb-1 pt-1 transition-colors hover:bg-white/5'>
					<p className='text-[17px] leading-relaxed whitespace-pre-wrap break-words text-foreground/90'>
						{profile.about || "Пользователь пока ничего не рассказал о себе"}
					</p>
				</div>
			</div>

			{isOwner && (
				<Modal
					open={openModal}
					onOpenChange={setOpenModal}
					trigger={<div className='hidden' />}
					title='Расскажи о себе'
					buttonProps='Применить изменения'
					disabled={aboutValue.length < 10}
					action={() => handleUpdateProfileAboutField(aboutValue, profile.id)}
				>
					<div className='relative group mt-2'>
						<Textarea
							{...register("about")}
							value={aboutValue}
							className={cn(
								"min-h-30 z-50 max-w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-[15px]",
								"transition-all duration-300 outline-none resize-none",
								"placeholder:text-muted-foreground/50 text-foreground",
								"focus:border-primary/50 focus:bg-primary/5 focus:shadow-[0_0_15px_rgba(var(--primary),0.1)]",
								"group-hover:border-white/20",
								"wrap-break-word whitespace-pre-wrap overflow-wrap-break-word",
							)}
							placeholder='Лежу на диване, ничего не делаю..'
						/>
					</div>
				</Modal>
			)}
		</>
	);
};
