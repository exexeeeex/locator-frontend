import { UserLocation } from "@/shared/components";
import { DetailItem, ProfileAbout, ProfileInterests } from "../..";
import {
	useProfileBody,
	useProfileQuality,
} from "@/features/profile/model/hooks";
import { useProfile } from "../context";
import { RatingBadge } from "@/entities/profile";
import { userDataService } from "@/entities/user";

export const ProfileBody: React.FC = ({}) => {
	const { profile } = useProfile();
	const { username, city } = profile;

	const { data } = useProfileQuality(profile.id);

	const localProfileId = userDataService.getProfileId();

	const { age, region, details } = useProfileBody(profile);

	return (
		<div className='px-5'>
			<div className='flex flex-wrap items-center gap-2'>
				<h2 className='text-2xl font-semibold tracking-tight'>{username}</h2>
				<span className='text-xl text-muted-foreground font-medium'>
					{age || "—"}
				</span>
				{profile.id === localProfileId && <RatingBadge score={data ?? 0} />}
			</div>

			<UserLocation location={`${city.name}, ${region.name}`} />

			<div className='mt-6'>
				<ProfileAbout />
			</div>

			<div className='mt-6 flex flex-col gap-2.5'>
				<h2 className='font-semibold text-lg'>Дополнительная информация</h2>
				{details ? (
					details.map((detail) => (
						<DetailItem
							key={detail.key}
							icon={detail.icon}
							title={detail.label}
							value={detail.value}
						/>
					))
				) : (
					<h1>Пока пусто</h1>
				)}
			</div>

			<div className='mt-6'>
				<ProfileInterests />
			</div>
		</div>
	);
};
