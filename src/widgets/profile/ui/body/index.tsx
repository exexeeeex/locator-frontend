import { UserLocation } from "@/shared/components";
import { DetailItem, ProfileAbout, ProfileInterests } from "../..";
import { useProfileBody } from "@/features/profile/model/hooks";
import { useProfile } from "../context";

export const ProfileBody: React.FC = ({}) => {
	const { profile } = useProfile();
	const { username, city } = profile;

	const { age, region, details } = useProfileBody(profile);

	return (
		<div className='pt-20 pb-6 px-5'>
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
				<h2 className='font-semibold text-lg'>Дополнительная информация</h2>
				{details.map((detail) => (
					<DetailItem
						key={detail.key}
						icon={detail.icon}
						title={detail.label}
						value={detail.value}
					/>
				))}
			</div>

			<div className='mt-6'>
				<ProfileInterests />
			</div>
		</div>
	);
};
