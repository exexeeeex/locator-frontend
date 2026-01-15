import { UserLocation } from "@/shared/components";
import { DetailItem, ProfileAbout } from "../..";
import { useProfileBody } from "@/features/profile/model/hooks";
import { useProfile } from "../../context";

export const ProfileBody: React.FC = ({}) => {
	const { profile, error } = useProfile();
	const { username, city } = profile;

	const { age, region, purpose, userAdditional } = useProfileBody(
		profile,
		error,
	);

	return (
		<div className='pt-20 px-6 pb-6'>
			<div className='flex items-end gap-2'>
				<h2 className='text-2xl font-semibold tracking-tight'>{username}</h2>
				<span className='text-xl text-muted-foreground font-medium'>
					{age || "—"}
				</span>
			</div>

			<UserLocation location={`${city.name}, ${region.name}`} />

			<div className='mt-6'>
				<ProfileAbout />
			</div>

			<div className='mt-6 flex flex-col gap-2.5'>
				<DetailItem
					icon={"education"}
					title={"Образование"}
					value={userAdditional.education}
				/>
				<DetailItem
					icon={"work"}
					title='Место работы'
					value={userAdditional.job}
				/>
				<DetailItem
					icon={"heart"}
					title='Хочу найти'
					value={purpose}
				/>
			</div>
		</div>
	);
};
