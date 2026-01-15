import { MyProfileAvatar } from "..";

export const MyProfileHeader: React.FC = () => {
	return (
		<header className='relative'>
			<div
				className='
        		  h-30
        		  bg-linear-to-br
        		  from-primary/90
        		  to-primary/60
        		'
			/>

			<div className='absolute left-6 -bottom-15'>
				<MyProfileAvatar />
			</div>
		</header>
	);
};
