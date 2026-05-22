import { InterestBadge, type Interest } from "@/entities/interest";
import { cn } from "@/shared/lib/utils";

type Props = {
	interests: Interest[];
	selected?: string[];
	onToggle?: (id: string) => void;
	badgeClassName?: string;
};

export const InterestsList: React.FC<Props> = ({
	interests,
	selected,
	onToggle,
	badgeClassName,
}) => {
	return (
		<div className='flex flex-wrap gap-2'>
			{interests.map((interest) => {
				const isActive = selected?.includes(interest.id);

				return (
					<button
						key={interest.id}
						type='button'
						onClick={onToggle ? () => onToggle(interest.id) : undefined}
						className={cn(
							"group rounded-xl transition-all duration-200",
							"hover:scale-[1.03] active:scale-[0.97]",
						)}
					>
						<InterestBadge
							name={interest.name}
							className={cn(
								"transition-all duration-300 px-4 py-2 text-[15px]",
								"border border-border/50 bg-muted/40 text-muted-foreground",
								"hover:bg-muted/80 hover:text-foreground",
								isActive &&
									"bg-linear-to-r from-primary to-accent backdrop-blur-3xl text-primary-foreground border-transparent",
								badgeClassName,
							)}
						/>
					</button>
				);
			})}
		</div>
	);
};
