import { Icon } from ".";

interface UserLocationProps {
	location: string;
}

export const UserLocation: React.FC<UserLocationProps> = ({ location }) => (
	<div className='flex items-center gap-2 mt-1.25'>
		<Icon
			icon={"pin"}
			size={16}
		/>
		<span className='text-muted-foreground'>{location}</span>
	</div>
);
