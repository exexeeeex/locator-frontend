import { InterestBadge } from "@entities/interest";
import { useLikeCardContext } from "../../context";

export const SympathiesLikeCardBody: React.FC = () => {
	const { profile } = useLikeCardContext();

	let about = profile.about;
	let interests = profile.selectedInterests;

	return (
		<div className='mt-4 space-y-3'>
			{about && (
				<div className='rounded-2xl border border-border bg-secondary/60 px-3.5 py-3 backdrop-blur-3xl'>
					<span className='text-sm leading-relaxed text-foreground/90 wrap-break-word'>
						{about.length > 100 ? about.slice(0, 100) + "..." : about}
					</span>
				</div>
			)}
			{interests && (
				<div className='flex flex-wrap gap-1.5'>
					{interests.map((interest) => (
						<InterestBadge
							key={interest.id}
							name={interest.userInterest.name}
						/>
					))}
				</div>
			)}
		</div>
	);
};
