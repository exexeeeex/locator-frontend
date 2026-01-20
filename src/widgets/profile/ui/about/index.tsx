import { useUserId } from "@/entities/user/model/hooks";
import { useProfileAbout } from "@/features/profile/model/hooks";
import { Card, Icon, Textarea } from "@/shared/components";
import { Modal } from "@/shared/components";
import { useProfile } from "../context";

export const ProfileAbout: React.FC = ({}) => {
	const id = useUserId();
	const { profile } = useProfile();
	const {
		open: openModal,
		setOpen: setOpenModal,
		register,
		watch,
	} = useProfileAbout();

	const aboutValue = watch("about") ?? "";

	if (id !== profile.userId) {
		return (
			<Card
				className='
                    p-5
                    gap-0.5
                    rounded-3xl
                    bg-card/80 backdrop-blur-xl
                    border border-border/40
                    shadow-sm
                '
			>
				<header className='flex items-center gap-2 mb-2'>
					<Icon
						icon='profile'
						size={20}
						stroke='var(--foreground)'
						color={""}
						fill={""}
					/>
					<span className='font-semibold text-[16px]'>Обо мне</span>
				</header>

				<p className='text-[15px] leading-relaxed whitespace-pre-wrap wrap-break-word text-foreground/90'>
					{profile.about || "Пользователь пока ничего не рассказал о себе"}
				</p>
			</Card>
		);
	}

	return (
		<>
			<Card
				className='
    			  p-5
    			  gap-0.5
    			  rounded-3xl
    			  bg-card/80 backdrop-blur-xl
    			  border border-border/40
    			  shadow-sm
    			'
			>
				<header className='flex justify-between'>
					<div className='flex items-center gap-2 mb-2'>
						<Icon
							icon='profile'
							size={20}
							stroke='var(--foreground)'
							color={""}
							fill={""}
						/>

						<span className='font-semibold text-[16px]'>Обо мне</span>
					</div>
					<div>
						{id === profile.userId && (
							<span
								onClick={() => setOpenModal(!openModal)}
								className='text-primary font-semibold'
							>
								Редактировать
							</span>
						)}
					</div>
				</header>

				<p className='text-[15px] leading-relaxed whitespace-pre-wrap wrap-break-word text-foreground/90'>
					{profile.about || "Пользователь пока ничего не рассказал о себе"}
				</p>
			</Card>
			<Modal
				open={openModal}
				onOpenChange={setOpenModal}
				trigger={<div className='hidden' />}
				title='Введите новый текст'
				buttonProps={"Применить изменения"}
				disabled={aboutValue.length < 10}
				action={function (): void {
					throw new Error("Function not implemented.");
				}}
			>
				<Textarea
					{...register("about")}
					value={aboutValue}
					className='border border-border/40 rounded-lg'
					placeholder='Лежу на диване, ничего не делаю..'
				/>
			</Modal>
		</>
	);
};
