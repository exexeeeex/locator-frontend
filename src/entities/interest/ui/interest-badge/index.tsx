import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

type Props = {
	name: string;
	className?: string;
};

export const InterestBadge: React.FC<Props> = ({ name, className }) => {
	return (
		<Badge
			variant={"outline"}
			className={cn(
				className,
				"border-[1.5px] backdrop-blur-3xl backdrop-saturate-180",
			)}
		>
			<span className='text-[1.1rem]'>{name}</span>
		</Badge>
	);
};
