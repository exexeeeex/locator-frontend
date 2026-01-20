import { Card, Icon } from "@/shared/components";
import type { IconType } from "@/shared/types";

type Props = {
	icon: IconType;
	title: string;
	value: string;
};

export const DetailItem: React.FC<Props> = ({ icon, title, value }) => {
	return (
		<Card
			className='
      		  w-full
      		  rounded-2xl
      		  px-4 py-3

      		  bg-card/80
      		  border border-border/60
      		'
		>
			<div className='flex items-center gap-4'>
				<div
					className='
          			  w-10 h-10 rounded-xl
          			  flex items-center justify-center
          			  bg-primary/10
          			'
				>
					<Icon
						icon={icon}
						size={24}
						color='currentColor'
						stroke='currentColor'
						className='text-primary fill-primary/50'
						fill={"currentColor"}
					/>
				</div>

				<div className='flex flex-col leading-tight'>
					<span className='text-[13px] text-muted-foreground font-medium'>
						{title}
					</span>
					<span className='text-[16px] font-semibold tracking-tight'>
						{value}
					</span>
				</div>
			</div>
		</Card>
	);
};
