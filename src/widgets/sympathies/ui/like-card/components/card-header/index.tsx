import { getUserAge } from "@/entities/user";
import { Icon } from "@/shared/components";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/shared/components/ui/avatar";
import { useLikeCardContext } from "../..";

export const SympathiesLikeCardHeader: React.FC = () => {
	const { profile, user } = useLikeCardContext();

	const avatar = profile.userMedias.find((um) => um.isPriority)?.link || "";
	const name = user.username;

	const birthday = profile.birthday;
	const city = profile.city.name;

	return (
		<header className='flex items-center gap-3.5'>
			<Avatar className='h-14 w-14 ring-2 ring-primary/20 ring-offset-2 ring-offset-background'>
				<AvatarImage
					className='h-full w-full object-cover'
					src={avatar}
					alt={name}
				/>
				<AvatarFallback className='h-full w-full bg-primary/10 text-xl font-semibold text-primary'>
					<h1></h1>
				</AvatarFallback>
			</Avatar>
			<div className='flex-1 min-w-0'>
				<div className='flex items-baseline gap-0.5'>
					<h1 className='truncate text-lg font-bold tracking-tight text-foreground'>
						{name}
					</h1>
					<span className='shrink-0 text-base font-medium text-muted-foreground'>
						, {getUserAge(birthday)}
					</span>
				</div>
				<div className='-ml-2 flex items-center gap-3 text-muted-foreground'>
					<Icon
						icon='pin'
						className='h-3.5 w-3.5 -mt-3 shrink-0'
					/>
					<span className='truncate text-sm font-medium'>{city}</span>
				</div>
			</div>
		</header>
	);
};
