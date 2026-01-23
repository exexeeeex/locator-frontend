import { InterestBadge, type Interest } from "@/entities/interest";

type Props = {
	interests: Interest[];
	selected?: string[];
	onToggle?: (id: string) => void;
};

export const InterestsList: React.FC<Props> = ({
	interests,
	selected,
	onToggle,
}) => {
	return (
		<div className='flex flex-wrap gap-1'>
			{interests.map((interest) => (
				<button
					key={interest.id}
					onClick={onToggle ? () => onToggle(interest.id) : undefined}
				>
					<InterestBadge
						className={
							selected && selected.includes(interest.id) ? `bg-pink-300/60` : ""
						}
						name={interest.name}
						key={interest.id}
					/>
				</button>
			))}
		</div>
	);
};
