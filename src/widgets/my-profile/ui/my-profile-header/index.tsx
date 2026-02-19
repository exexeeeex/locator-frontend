import { DrawerWindow } from "@/shared/components";
import { MyProfileAvatar } from "..";
import { Icon } from "@/shared/components";

export const MyProfileHeader: React.FC = () => {
	return (
		<header className='relative'>
			<div
				className='
				  rounded-t-3xl
        		  h-30
        		  bg-linear-to-br
        		  from-primary/90
        		  to-primary/60
        		'
			/>
			<DrawerWindow
				trigger={
					<button
						className='
        				  absolute top-4 right-4
        				  w-9 h-9 rounded-full

        				  flex items-center justify-center

        				  bg-background/70
        				  backdrop-blur-sm

        				  transition
        				  active:scale-95
        				'
						aria-label='Настройки профиля'
					>
						<Icon
							icon='settings'
							size={18}
							stroke='currentColor'
							color='var(--foreground)'
							className='opacity-80'
							fill={""}
						/>
					</button>
				}
			>
				<h1>жопа</h1>
			</DrawerWindow>

			<div className='absolute left-6 -bottom-15'>
				<MyProfileAvatar />
			</div>
		</header>
	);
};
