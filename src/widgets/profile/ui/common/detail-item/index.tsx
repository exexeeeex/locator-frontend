import { Card, Icon } from "@/shared/components";
import type { IconType } from "@/shared/types";

type Props = {
	icon: IconType;
	title: string;
	value: string;
};

export const DetailItem: React.FC<Props> = ({ icon, title, value }) => {
	return (
		<Card className='w-full p-2 rounded-2xl'>
			<div className='flex gap-2'>
				<div className='bg-primary w-12 h-12 rounded-xl flex justify-center items-center'>
					<Icon
						icon={icon}
						size={35}
						color={"white"}
						fill='currentColor'
						className='fill-foreground'
						stroke={"white"}
					/>
				</div>
				<div>
					<h2 className='font-semibold text-md'>{title}</h2>
					<span>{value}</span>
				</div>
			</div>
		</Card>
	);
};
